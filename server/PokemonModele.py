from google.appengine.ext import ndb

class Pokemon(ndb.Model):
    numero = ndb.IntegerProperty()
    nompokemon = ndb.StringProperty()
