import configparser
import uuid

config = configparser.ConfigParser()

config.read('config.ini')

class ConfReader():

  DEBUG = True
  MAIL_SENDGRID_API_KEY = config['default']['MAIL_SENDGRID_API_KEY']
  MAIL_DEFAULT_SENDER = config['default']['MAIL_DEFAULT_SENDER']
  SECRET_KEY = 'GO\xdbkk?\rEo\x17X\x9fQ@\xe0G'
  CORS_HEADERS = 'Content-Type'


confreader = ConfReader()
