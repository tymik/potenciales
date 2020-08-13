import platform
from aiohttp import web

async def hostname_json(request):
    data = {'hostname': platform.node()}
    return web.json_response(data)