//twitter User
class User{
    constructor(user, username, age){
        this.user = user,
        this.username = username,
        this.age = age
    }
}
const usuario1 = new User("Uriel", "Uriellll", 25);
//twitter tendringTopic
class TrendingTopic{
    constructor(topic, hashtag, date){
        this.topic = topic;
        this.hashtag = hashtag;
        this.date = date;
        
    }
    getHashtag(){
        return this.hashtag;
    }
    setHastag(hashtag){
        this.hashtag = hashtag;
    }
}
const trend = new TrendingTopic("Por qué elegir Node JS", "#NodeJS", "16/04/2022");
console.log(trend);
trend.setHastag("#NodeJSWhy");
console.log(trend);

// twitter hashtag
class Hashtag {
    constructor(phrase){
        this.phrase = phrase;
        this. date ="16/04/2022"
    }
}
const hash = new Hashtag("#Dancing");
console.log(hash);

//Facebook User
class UserFacebook {
    constructor(user, dateBirth,hobbies,university){
        this.user = user;
        this.dataBirth = dateBirth;
        this.hobbies = hobbies;
        this.university = university;
    }
}
//Facebook Post
class PostFacebook {
    constructor(date,phrase,likes){
        this.date = date;
        this.phrase = phrase;
        this.likes = likes
    }
}

//Facebook biography
class BiographyFacebook{
    constructor(work,phoneNumbre,email,introduction){
        this.work = work;
        this.phoneNumbre = phoneNumbre;
        this.email = email;
        this.introduction = introduction
    }
}


//uber Profile

class Profile {
    constructor(user,phoneNumbre,email){
        this.user = user;
        this.phoneNumbre = phoneNumbre;
        this.email = email;
    }
}
//uber travel
class Travel{
    constructor(from,to,price, date){
        this.from = from;
        this.to = to;
        this.price = price;
        this.date = date;
    }
}
const travel1 =  new Travel("Glorieta de insurgentes", "Bellas Artes", 120, "16/04/2022");
console.log(travel1);