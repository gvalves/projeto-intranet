FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ src/
COPY data/ data/

ENV PYTHONPATH=/app/src
ENV INTRANET_API_SHEETS_DIR=/app/data

EXPOSE 10638

CMD ["uvicorn", "srv_intranet_api.main:app", "--host", "0.0.0.0", "--port", "10638"]
