import platform

from aiohttp import web

from myjsons import *

async def handle(request):
    hostname = platform.node()
    text = "Hello, This is the ID of this container:" + hostname
    return web.Response(text=text)



app = web.Application()
app.add_routes([web.get('/', handle),
                web.get('/{hostname}', handle),
                web.get('/json/{hostname}', hostname_json)])

if __name__ == '__main__':
    web.run_app(app)