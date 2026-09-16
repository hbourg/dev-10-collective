class User:

    def __init__ (self, user_id, first_name, last_name, email, password, provider, user_discord_id, role, location):
        self.user_id = user_id
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
        self.provider = provider
        self.user_discord_id = user_discord_id
        self.role = role
        self.location = location

    def set_user_id(self, user_id):
        self.user_id = user_id

    def set_discord_id(self, discord_id):
        self.user_discord_id = discord_id

    def set_user_role(self, role):
        self.role = role

    def set_location(self, location):
        self.location = location