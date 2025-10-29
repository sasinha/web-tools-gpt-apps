FROM python:3.14.0 AS builder

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

WORKDIR /opt/build

RUN python -m venv /opt/venv
COPY web_tools_server/requirements.txt .
RUN /opt/venv/bin/pip install --upgrade pip \
    && /opt/venv/bin/pip install --no-cache-dir -r requirements.txt

FROM python:3.14.0-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PATH="/app/web_tools_server/.venv/bin:$PATH"

WORKDIR /app/web_tools_server

COPY --from=builder /opt/venv .venv
COPY web_tools_server/ .
COPY assets/ ../assets

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
