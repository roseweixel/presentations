function getArtistFromSpotify(artistName) {
    var artist = artistName;
    var url = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";
    $.ajax(url, {
        method: "GET",
        success: function(data){
          console.log("WE GOT DATA!")
        }
    });
}

getArtistFromSpotify("Michael Jackson");

// this object gets returned:
/* 
{
  "artists" : {
    "href" : "https://api.spotify.com/v1/search?query=michael+jackson&offset=0&limit=20&type=artist",
    "items" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm"
      },
      "followers" : {
        "href" : null,
        "total" : 1947297
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm",
      "id" : "3fMbdgg4jU18AjLCKBhRSm",
      "images" : [ {
        "height" : 881,
        "url" : "https://i.scdn.co/image/738650ce127e119788a7bca020fbd054b5aa57b5",
        "width" : 1000
      }, {
        "height" : 564,
        "url" : "https://i.scdn.co/image/8675fae7dd68a7f8ee97d65106c2f68c8026498b",
        "width" : 640
      }, {
        "height" : 176,
        "url" : "https://i.scdn.co/image/e8f489fb953e2d1cb00d1c18c903d6149cb1196d",
        "width" : 200
      }, {
        "height" : 56,
        "url" : "https://i.scdn.co/image/06e195eaaa853b397ccaa971edaa25554dba3c05",
        "width" : 64
      } ],
      "name" : "Michael Jackson",
      "popularity" : 88,
      "type" : "artist",
      "uri" : "spotify:artist:3fMbdgg4jU18AjLCKBhRSm"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/4BvuKi5ezeTbt2Zit4GiVk"
      },
      "followers" : {
        "href" : null,
        "total" : 1540
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/4BvuKi5ezeTbt2Zit4GiVk",
      "id" : "4BvuKi5ezeTbt2Zit4GiVk",
      "images" : [ ],
      "name" : "Michael Jackson featuring Paul McCartney",
      "popularity" : 33,
      "type" : "artist",
      "uri" : "spotify:artist:4BvuKi5ezeTbt2Zit4GiVk"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/65MWDcUGvGZXts4Y79SWNO"
      },
      "followers" : {
        "href" : null,
        "total" : 889
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/65MWDcUGvGZXts4Y79SWNO",
      "id" : "65MWDcUGvGZXts4Y79SWNO",
      "images" : [ ],
      "name" : "Michael Jackson featuring Siedah Garrett",
      "popularity" : 31,
      "type" : "artist",
      "uri" : "spotify:artist:65MWDcUGvGZXts4Y79SWNO"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/5NN1fpQQXllkcf5hVVo7Lk"
      },
      "followers" : {
        "href" : null,
        "total" : 1020
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/5NN1fpQQXllkcf5hVVo7Lk",
      "id" : "5NN1fpQQXllkcf5hVVo7Lk",
      "images" : [ ],
      "name" : "Michael Jackson with Akon",
      "popularity" : 9,
      "type" : "artist",
      "uri" : "spotify:artist:5NN1fpQQXllkcf5hVVo7Lk"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/349ymR3M8bnpdXdLrmbGVu"
      },
      "followers" : {
        "href" : null,
        "total" : 15
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/349ymR3M8bnpdXdLrmbGVu",
      "id" : "349ymR3M8bnpdXdLrmbGVu",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1c20448585d55a184d5e99f9eb58cd964cad660e",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ef9c523ef94e2ce817ea485f6a3c284159616872",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/de3ea9d5d9fdd59895d29a77f0f1169d761f80bb",
        "width" : 64
      } ],
      "name" : "Michael Lee Jackson",
      "popularity" : 13,
      "type" : "artist",
      "uri" : "spotify:artist:349ymR3M8bnpdXdLrmbGVu"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7LI0TvOBQdTaOMBsywCk1u"
      },
      "followers" : {
        "href" : null,
        "total" : 47
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7LI0TvOBQdTaOMBsywCk1u",
      "id" : "7LI0TvOBQdTaOMBsywCk1u",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/f8fd2dc2cf75b1fce4ff77888d45d9820c050625",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/5cf14f78aabfbca54aba4b4b4734e2dd82a017ca",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/13c9406903f3f5887e39886c23c020d2e5e7590a",
        "width" : 64
      } ],
      "name" : "Jackson Michael",
      "popularity" : 4,
      "type" : "artist",
      "uri" : "spotify:artist:7LI0TvOBQdTaOMBsywCk1u"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3kvgmC7OQA6BGBvvZO7zpw"
      },
      "followers" : {
        "href" : null,
        "total" : 354
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/3kvgmC7OQA6BGBvvZO7zpw",
      "id" : "3kvgmC7OQA6BGBvvZO7zpw",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/e01565d5a8efa99ccc17d4147ac119a184e4ffa4",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/7096cea5a62cda78f0b45c9b87cb30ebae3294fb",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/1d4f094f48d232f6274ce72138d3ef4651dbd64f",
        "width" : 64
      } ],
      "name" : "Fran London feat. Michael Jackson",
      "popularity" : 15,
      "type" : "artist",
      "uri" : "spotify:artist:3kvgmC7OQA6BGBvvZO7zpw"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7EoFxaRIjXgojlHsYfdmPU"
      },
      "followers" : {
        "href" : null,
        "total" : 5
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7EoFxaRIjXgojlHsYfdmPU",
      "id" : "7EoFxaRIjXgojlHsYfdmPU",
      "images" : [ ],
      "name" : "Michael George Jackson-Clark",
      "popularity" : 4,
      "type" : "artist",
      "uri" : "spotify:artist:7EoFxaRIjXgojlHsYfdmPU"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7ch97wQcmoFJGx1RN5Gss7"
      },
      "followers" : {
        "href" : null,
        "total" : 19
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7ch97wQcmoFJGx1RN5Gss7",
      "id" : "7ch97wQcmoFJGx1RN5Gss7",
      "images" : [ ],
      "name" : "Michael Gregory Jackson",
      "popularity" : 2,
      "type" : "artist",
      "uri" : "spotify:artist:7ch97wQcmoFJGx1RN5Gss7"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7laaeJcmU9FPO4OdhFelEN"
      },
      "followers" : {
        "href" : null,
        "total" : 15
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7laaeJcmU9FPO4OdhFelEN",
      "id" : "7laaeJcmU9FPO4OdhFelEN",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/d577bcf19729d06c3fc281390d847c7ade71d652",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/7789ebe773133a1d38863357ee13b524f10c23c1",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/bc88da7f49eadac98a62c34aec0256e56fbf8046",
        "width" : 64
      } ],
      "name" : "David Michael Jackson",
      "popularity" : 5,
      "type" : "artist",
      "uri" : "spotify:artist:7laaeJcmU9FPO4OdhFelEN"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/19CjkeoxK1wLE0mk6R2rxj"
      },
      "followers" : {
        "href" : null,
        "total" : 2
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/19CjkeoxK1wLE0mk6R2rxj",
      "id" : "19CjkeoxK1wLE0mk6R2rxj",
      "images" : [ {
        "height" : 600,
        "url" : "https://i.scdn.co/image/e87b4b3d0eae2ad573a0fd1955f7cdb7bb111f76",
        "width" : 600
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/5ab04e5f048b90e07b1df446bed9f27e9262bb64",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/6f78ca3b38aecf20673f85993e660f13c71c50cf",
        "width" : 64
      } ],
      "name" : "Nona-michael Jackson",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:19CjkeoxK1wLE0mk6R2rxj"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/4Q3aSZGYDiFjmeoilPa8zE"
      },
      "followers" : {
        "href" : null,
        "total" : 8
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/4Q3aSZGYDiFjmeoilPa8zE",
      "id" : "4Q3aSZGYDiFjmeoilPa8zE",
      "images" : [ ],
      "name" : "Michael Jackson For Siegfried",
      "popularity" : 1,
      "type" : "artist",
      "uri" : "spotify:artist:4Q3aSZGYDiFjmeoilPa8zE"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3s9XxUSCzrvScn1ZZ4q2sK"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/3s9XxUSCzrvScn1ZZ4q2sK",
      "id" : "3s9XxUSCzrvScn1ZZ4q2sK",
      "images" : [ ],
      "name" : "Jeffrey Michael Jackson",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:3s9XxUSCzrvScn1ZZ4q2sK"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/27sfvc84RtbRO2YTBOwqFd"
      },
      "followers" : {
        "href" : null,
        "total" : 2
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/27sfvc84RtbRO2YTBOwqFd",
      "id" : "27sfvc84RtbRO2YTBOwqFd",
      "images" : [ ],
      "name" : "Jackson & Michael",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:27sfvc84RtbRO2YTBOwqFd"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2B23haEzypWbf1HnyM31k3"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/2B23haEzypWbf1HnyM31k3",
      "id" : "2B23haEzypWbf1HnyM31k3",
      "images" : [ ],
      "name" : "Michael Joe Jackson",
      "popularity" : 1,
      "type" : "artist",
      "uri" : "spotify:artist:2B23haEzypWbf1HnyM31k3"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7JkKjjETxHibLaVCudBaxZ"
      },
      "followers" : {
        "href" : null,
        "total" : 12
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7JkKjjETxHibLaVCudBaxZ",
      "id" : "7JkKjjETxHibLaVCudBaxZ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/5f7a9a414620ed74cc85e20a9831f919edb9450d",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/55ef71ebab4e50009369b9fff99113752b1a7fcb",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/fdc22d4dc9941bc0e96103d58b419a7a0e95de93",
        "width" : 64
      } ],
      "name" : "Michael Jackson Montgomery",
      "popularity" : 3,
      "type" : "artist",
      "uri" : "spotify:artist:7JkKjjETxHibLaVCudBaxZ"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0KbxsLC7vl0d3VTtcilsg0"
      },
      "followers" : {
        "href" : null,
        "total" : 633
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0KbxsLC7vl0d3VTtcilsg0",
      "id" : "0KbxsLC7vl0d3VTtcilsg0",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c87966dce2624430a33058ba05d5d4b3bced709c",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/3c174c9b259d13548c1decc54173d4b5bbee00f8",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/4c353950f57fad471d928115a8f30ef4e6e7f2a3",
        "width" : 64
      } ],
      "name" : "Michael Jackson & The Jackson Five",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0KbxsLC7vl0d3VTtcilsg0"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3TgJL5mYC1FiasvT6OPzeQ"
      },
      "followers" : {
        "href" : null,
        "total" : 11
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/3TgJL5mYC1FiasvT6OPzeQ",
      "id" : "3TgJL5mYC1FiasvT6OPzeQ",
      "images" : [ ],
      "name" : "Michael Jackson & Siedah Garret",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:3TgJL5mYC1FiasvT6OPzeQ"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/00wUArHQ8oG1iu2C6GAatV"
      },
      "followers" : {
        "href" : null,
        "total" : 5
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/00wUArHQ8oG1iu2C6GAatV",
      "id" : "00wUArHQ8oG1iu2C6GAatV",
      "images" : [ ],
      "name" : "Michael Jackson with Diana Ross",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:00wUArHQ8oG1iu2C6GAatV"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/686iPnPyM9JQa2lXdF1fxS"
      },
      "followers" : {
        "href" : null,
        "total" : 102
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/686iPnPyM9JQa2lXdF1fxS",
      "id" : "686iPnPyM9JQa2lXdF1fxS",
      "images" : [ ],
      "name" : "Made famous by Michael Jackson",
      "popularity" : 11,
      "type" : "artist",
      "uri" : "spotify:artist:686iPnPyM9JQa2lXdF1fxS"
    } ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/search?query=michael+jackson&offset=20&limit=20&type=artist",
    "offset" : 0,
    "previous" : null,
    "total" : 38
  }
}
*/
