import platform

import asyncio
from aiohttp import web
import aiohttp_cors

from myjsons import *

# @asyncio.coroutine
async def handler(request):
    hostname = platform.node()
    text = "Hello, This is the ID of this container:" + hostname
    return web.Response(
        text=text,
        headers={
            "Access-Control-Allow-Origin": "*",
        })

app = web.Application()

# def handler(request):
#     return web.Response(
#         text="Hello!",
#         headers={
#             "X-Custom-Server-Header": "Custom data",
#         })

cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
            expose_headers="*",
            allow_headers="*",
        )
})


# for handler in handlers:
#     # Register handler
#     route = app.router.add_route('*', handler.URL_PATH, handler)
    
#     # Handler should be handled with CORS
#     app['aiohttp_cors'].add(route)


app.add_routes([web.get('/', handler),
                web.get('/{hostname}', handler),
                web.get('/json/{hostname}', hostname_json)])

# `aiohttp_cors.setup` returns `aiohttp_cors.CorsConfig` instance.
# The `cors` instance will store CORS configuration for the
# application.
# cors = aiohttp_cors.setup(app)

# Add all resources to `CorsConfig`.
resource = cors.add(app.router.add_resource("/json/hostname"))
# route = cors.add(resource.add_route("GET", handler))
route = cors.add(
    resource.add_route("GET", handler), {
        "*": aiohttp_cors.ResourceOptions(
            expose_headers="*",
            allow_headers="*",
        )
    })

# route = cors.add(route, {
#         "*":
#             aiohttp_cors.ResourceOptions(allow_credentials=True),
#     })
# cors.add(resource.add_route("PUT", handler_put))
# cors.add(resource.add_route("POST", handler_put))
# cors.add(resource.add_route("DELETE", handler_delete))


if __name__ == '__main__':
    web.run_app(app)