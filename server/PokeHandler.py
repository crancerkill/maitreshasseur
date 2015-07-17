import json
import csv
import urllib2
from server.BaseHandler import BaseHandler
from server import jsonEncode
from server.PokemonModele import Pokemon

class PokeHandler(BaseHandler):
    def get(self):
        self.response.write('')

    def post(self):
        mode = self.request.GET.get("mode", self.request.url.split("/")[-1].split('?')[0])
        if mode == 'importcsv':
            url = 'https://docs.google.com/spreadsheets/d/1CZ6uqK4Z-7QYxC8PH5F-o_hco6-N9FIMjWwYUsRH19c/export?format=csv'
            rep = urllib2.urlopen(url)
            moncsv = csv.reader(rep)
            for row in moncsv:
                num = row[0]
                num = str(num).replace("'", "")
                nom = str(row[1]).replace(" ", "")
                pokemon = Pokemon(numero=int(num),
                                  nompokemon=nom)
                pokemon.put()
        if mode == 'getall':
            response = { 'pokemons': [] }
            pokemons = Pokemon.query().fetch()
            response['pokemons'] = pokemons
            self.response.write(jsonEncode.encode(response))

    def put(self):
        pass

    def delete(self):
        pass
