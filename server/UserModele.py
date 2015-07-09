from google.appengine.ext import ndb

class User(ndb.Model):
    user = ndb.StringProperty()
    password = ndb.StringProperty()
