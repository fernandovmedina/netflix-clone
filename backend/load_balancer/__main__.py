import json
import httpx
from fastapi import FastAPI, Request
from fastapi.responses import Response

servers: list[str] = json.load(open("servers.json"))["servers"]

app: FastAPI = FastAPI()
current: int = 0

@app.api_route("/api/v1/loadbalancer/{path:path}", methods=["GET","POST","PUT","DELETE"])
async def LoadBalancerEndpoint(request: Request, path: str):
    global current

    server: str = servers[current]
    current     = (current + 1) % len(servers)

    url: str = f"{server}/api/v1/{path}"

    method:  str  = request.method
    headers: dict = dict(request.headers)
    headers.pop("host", None)

    body:    bytes = await request.body()
    queries: dict  = dict(request.query_params)

    async with httpx.AsyncClient(timeout = 5.0) as client:
      response = await client.request(
        method  = method,
        url     = url,
        headers = headers,
        params  = queries,
        content = body
      )

    return Response(
      content     = response.content,
      status_code = response.status_code,
      headers     = dict(response.headers)
    )