#!/usr/bin/env python3
"""SPA-aware static server for the Math Club site.

`python3 -m http.server` returns a plain 404 for routes like /events or
/articles/5 (there is no real file with that name), so refreshing the page
drops you out of the app. This server rewrites any request that doesn't match
a real file/directory to index.html -- the same behaviour GitHub Pages gets
from 404.html -- so in-app route refreshes stay on the same page.

Usage:  python3 serve.py [port]   (default port 8000, serves this folder)
"""
import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = os.path.dirname(os.path.abspath(__file__))


class SPAServer(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def send_head(self):
        # Let real files and directories be served normally.
        path = self.translate_path(self.path)
        if os.path.isfile(path) or os.path.isdir(path):
            return super().send_head()
        # Otherwise it's an SPA route (e.g. /events, /articles/5): serve index.html
        # instead of a 404, with the original URL preserved so the client router
        # (runRoutingState) can read the route from window.location.pathname.
        original = self.path
        self.path = "/index.html"
        try:
            result = super().send_head()
        finally:
            self.path = original
        return result


if __name__ == "__main__":
    server = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), SPAServer)
    print(f"Serving Math Club at http://localhost:{PORT}/  (Ctrl+C to stop)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()