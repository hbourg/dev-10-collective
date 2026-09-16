class Location:
    
    def __init__(self, location_id, city, state, country):
        self.location_id = location_id
        self.city = city
        self.state = state
        self.country = country

    def set_location_id(self, location_id):
        self.location_id = location_id
        
