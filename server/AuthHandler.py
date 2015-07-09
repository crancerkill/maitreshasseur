import json
from server.BaseHandler import BaseHandler
from server import jsonEncode
from server.UserModele import User

class AuthHandler(BaseHandler):
    def get(self):
        self.response.write('')

    def post(self):
        mode = self.request.GET.get("mode", self.request.url.split("/")[-1].split('?')[0])
        if mode == 'connexion':
            lebody = json.loads(self.request.body)
            user = str(lebody.get('user')).lower()
            user = user.replace(" ", "")
            mdp = str(lebody.get('mdp')).lower()
            if user != "" and mdp != "" and user != None and mdp != None:
                connexionexiste = User.query(User.user == user and User.password == mdp).get()
                if connexionexiste != "" and connexionexiste != None:
                    self.setSessionParameter('user', user)
                else:
                    print('connexion existe pas')
            else:
                print('user et mot de pass non rempli')
        elif mode == 'affuser':
            user = self.getSessionUser()
            response = {
                'user': user
            }
            self.response.write(jsonEncode.encode(response))
        elif mode == 'register':
            lebody = json.loads(self.request.body)
            user = str(lebody.get('user')).lower()
            user = user.replace(" ", "")
            mdp = str(lebody.get('mdp')).lower()
            if user != "" and mdp != "" and user != None and mdp != None:
                userexiste = User.query(User.user == user).get()
                if userexiste != "" and userexiste != None:
                    print('existe deja')
                else:
                    newuser = User(user=user, password=mdp)
                    newuser.put()
                    print('Ok creer')

    def put(self):
        pass

    def delete(self):
        pass
