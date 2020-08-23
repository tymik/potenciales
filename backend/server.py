import platform

import asyncio
from aiohttp import web

from aiohttp_middlewares import cors_middleware
from aiohttp_middlewares.cors import DEFAULT_ALLOW_HEADERS

from myjsons import *

async def handler(request):
    hostname = platform.node()
    text = "Hello, This is the ID of this container:" + hostname
    return web.Response(
        text=text,
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, HEAD, GET, POST",
        })


app = web.Application(
    middlewares=[cors_middleware(allow_all=True)]
)

app.add_routes([web.route('*', '/', handler),
                web.route('*', '/{hostname}', handler),
                web.route('*', '/json/{hostname}', hostname_json)])

if __name__ == '__main__':
    web.run_app(app)