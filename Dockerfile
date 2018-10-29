FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ADD ./web/ /code/
COPY ./web/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
