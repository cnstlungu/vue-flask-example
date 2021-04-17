from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_mail import Message
from datetime import datetime
import pytz
from flask_mail_sendgrid import MailSendGrid
from config import confreader

app = Flask(__name__)

app.config.from_object(confreader)

curdate = str(datetime.now(pytz.timezone("Europe/London")))

cors = CORS(app, resources={r"/api/sendemail": {"origins": "localhost"}})

mail = MailSendGrid(app)

@app.route('/api/sendemail', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def send_email():

    subject = '[Contact Form Message] ' + request.json['name'] + ' on ' + curdate
    template = "<h1>"+request.json['name'] + "("+request.json['email']+") on "+curdate+"</h1><p>"+request.json['text']+"</p>"

    msg = Message(
        subject,
        recipients=[app.config['MAIL_DEFAULT_SENDER']],
        html=template,
        sender=request.json['email']
    )

    try:
      mail.send(msg)
      return jsonify(True)
    except:
      return jsonify(False)

if __name__ == '__main__':
    app.run()
