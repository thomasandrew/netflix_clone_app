import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Play from './Play';
import Movies from './Movies';
import Types from './Types';
import Watching from './Watching';
import Box from './Box';
import Watched from './Watched';
import Trailers from './Trailers';
import Original from './Original';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <Image
            style={styles.main_star}
            source={{
              uri:
                'https://i.pinimg.com/originals/88/eb/2d/88eb2df9b2a2a547f093646d3149dfef.jpg',
            }}
          />
          <View style={styles.nav}>
            <View style={{ marginTop: -12 }}>
              <Image
                source={{
                  uri:
                    'https://i.pinimg.com/originals/60/b9/b1/60b9b11b28fde9cc13dd039ce8514076.png',
                }}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <TouchableOpacity style={{ left: 19, fontFamily: 'Arial' }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Series</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ left: 77, fontFamily: 'Arial' }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Films</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ left: 145, fontFamily: 'Arial' }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>My List</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Play />
        <View style={styles.filmList}>
          <Types txt="   Popular on Netflix" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img3.acsta.net/r_1280_720/pictures/18/08/07/00/17/4205927.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/564x/87/d3/21/87d321f315d4b262aaf8a0a01b894920.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHzM_yTF8jZ4bCbMgyQY9t8-mKzucl8k6VSaURfypKSF2-Ozgm'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Conjuring_poster.jpg/220px-Conjuring_poster.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/de/e2/f1/dee2f1e2e4c21eb2d56bc6552a9161bf.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://occ-0-1009-1001.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABbeZK102u25dNSBGkdinLjj19ChIBb96IGW6gzrom48XDwA15vMf0IMqSYSr5nmusPCi1cOVg31r9JyM0XX34U_F3gxMK9mXoQ.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Gotham_%28season_5%29.jpg/220px-Gotham_%28season_5%29.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img3.acsta.net/pictures/14/02/06/15/11/493568.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/The_Avengers_Cartaz.jpg/250px-The_Avengers_Cartaz.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://3.bp.blogspot.com/-n8lh6CP-FpM/XDd4zDt8E0I/AAAAAAAAATU/mmLyIZvNKS06_uBpTt6yq6lQpqFw5rk1gCLcBGAs/s1600/serie-scream-panico-1-2-temporada-frete-gratis-D_NQ_NP_748510-MLB26751662063_022018-F.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/474x/00/a2/71/00a271fcfeb4a2c1268b9306985ff83b.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'data:image/jpeg;base64,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'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Mummy_%282017%29.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/474x/fd/85/31/fd8531b14531498885129ad671a3556f.jpg'
                }
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Start */}

        <View style={styles.filmList}>
          <Types txt="   Trending Now" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/9a/29/0a/9a290ad68c9b04aedb7d5531327b156c.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/50/7c/23/507c23ff361069cd26fc1014cab9bd22.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/ca/5b/f2/ca5bf27ff2ef306faf1bb217c65df3b1.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://assets.nflxext.com/us/boxshots/hd1080/70213469.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/7b/31/bc/7b31bc5fc0d1220ecaed2846462f3fb6.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/pt/5/53/Captain_America_Civil_War_poster.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/474x/27/e6/10/27e610b65203d8514f3c3ed6436376c0.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/82/94/65/829465f6a1bd73ea7a2a7aecc6074700.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={'https://images.justwatch.com/poster/8711454/s592'}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'data:image/jpeg;base64,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'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://http2.mlstatic.com/D_NQ_NP_14130-MLB163631964_7268-O.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://m.media-amazon.com/images/M/MV5BMjE1NDMxMjI0OV5BMl5BanBnXkFtZTcwMjQyMDExOQ@@._V1_.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'data:image/jpeg;base64,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'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/564x/e2/15/5b/e2155ba33358d3a4f46ca6d23cde7fde.jpg'
                }
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Start here */}

        <View style={styles.filmList}>
          <Types txt="   Continue Watching" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Watching
                conti={
                  'https://http2.mlstatic.com/dvd-dracula-untold-D_NQ_NP_950543-MLB26684869747_012018-F.jpg'
                }
              />
              <Watched />
            </TouchableOpacity>
            <Box infor="S1:E0" />

            <TouchableOpacity>
              <Watching
                conti={
                  'https://img.elo7.com.br/product/zoom/268AB29/big-poster-resident-evil-6-o-capitulo-final-lo2-90x60-cm-poster-cinema.jpg'
                }
              />
              <Watched />
            </TouchableOpacity>
            <Box infor="S1:E0" />

            <TouchableOpacity>
              <Watching
                conti={
                  'https://i.pinimg.com/originals/50/7c/23/507c23ff361069cd26fc1014cab9bd22.jpg'
                }
              />
              <Watched />
            </TouchableOpacity>
            <Box infor="S1:E0" />

            <TouchableOpacity>
              <Watching
                conti={
                  'https://i.pinimg.com/originals/18/86/1e/18861ef3459b4d67868186ff5815088a.jpg'
                }
              />
              <Watched />
            </TouchableOpacity>
            <Box infor="S1:E0" />
          </ScrollView>
        </View>

        <View style={{ marginTop: -20 }}>
          <Types txt="   Avalable Now" />
          <Trailers />
        </View>
        <View>
          <Text>{'\n'}</Text>
        </View>

        {/* Originals */}

        <View style={styles.oriList}>
          <Types txt="   NETFLIX ORIGINALS" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Original oriUri="https://cafecomnerd.com.br/wp-content/uploads/2019/12/The-Witcher-Poster1-Netflix.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://i.pinimg.com/originals/41/2f/6a/412f6ab5f1bed24acca30ad233163999.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="data:image/jpeg;base64,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" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://images-na.ssl-images-amazon.com/images/I/71xby-zAr7L._AC_SY679_.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://image.tmdb.org/t/p/w600_and_h900_bestv2/pkRaRYPwO23vY7r3tV9uwZBuAZ0.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://www.baka-tsuki.org/project/thumb.php?f=Fateapocrypha_vol.01_cover.jpg&width=300" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://i.pinimg.com/474x/fa/af/23/faaf2333cc84fb1d232c25f59b0b8727.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://i.pinimg.com/originals/51/aa/b4/51aab4b93ddac396f57bae36d9f21201.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://img.elo7.com.br/product/zoom/1D05A73/poster-jessica-jones-netflix-tamanho-90x-0-cm-lo004-jessica-jones.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://screenanarchy.com/assets/2019/06/sa_The3rdEye2_MataBatin2_430.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://pm1.narvii.com/6811/6b224b39782a0a95572e8905cfb0c0be8946d145v2_hq.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://i.pinimg.com/originals/a1/c2/d6/a1c2d6ae0fe328bcc413a86cdfbc66da.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://occ-0-2292-2567.1.nflxso.net/art/90b2a/bdb8f36360be95d7db20c400becce3e9f8490b2a.jpg" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c7f7ec1-13ec-48d1-a07a-8e6e04998785/ddlw2sq-6181379e-fb48-4256-81c5-947c925eac79.jpg/v1/fill/w_1024,h_1449,q_75,strp/v_wars_poster_by_doomw123_ddlw2sq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0OSIsInBhdGgiOiJcL2ZcLzVjN2Y3ZWMxLTEzZWMtNDhkMS1hMDdhLThlNmUwNDk5ODc4NVwvZGRsdzJzcS02MTgxMzc5ZS1mYjQ4LTQyNTYtODFjNS05NDdjOTI1ZWFjNzkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ao_Ny6f_tH0s1X3yvwF9EBSTRH6UJjgMgzC5Q0XB8Hw" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Original oriUri="https://ih0.redbubble.net/image.543819923.3712/flat,550x550,075,f.u2.jpg" />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/*last */}

        <Text>{'\n'}</Text>
        <View style={styles.filmList}>
          <Types txt="   Watch it Again" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/50/7c/23/507c23ff361069cd26fc1014cab9bd22.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img3.acsta.net/r_1280_720/pictures/18/08/07/00/17/4205927.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/564x/87/d3/21/87d321f315d4b262aaf8a0a01b894920.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://m.media-amazon.com/images/M/MV5BOGUxOWQ4MzAtMmJjYS00M2U5LWEwZTAtYTc1YmZhNjg2NDRlXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://pm1.narvii.com/6811/6b224b39782a0a95572e8905cfb0c0be8946d145v2_hq.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/de/e2/f1/dee2f1e2e4c21eb2d56bc6552a9161bf.jpg'
                }
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Comedies*/}

        <View style={styles.filmList}>
          <Types txt="   Comedies" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/474x/54/6a/e5/546ae59b31c3903a44fa16a5348808b7.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://images-na.ssl-images-amazon.com/images/I/81VCXWk0JUL._AC_SY445_.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img3.acsta.net/pictures/15/09/11/23/14/389912.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/90/90/54/20119291.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://www.cafecomfilme.com.br/media/k2/items/cache/66383f5803e19da78ece25a31c8e71b5_XL.jpg?t=20170206_150137'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://images-na.ssl-images-amazon.com/images/I/51eGW7W9reL._SY445_.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://cdn.fstatic.com/media/movies/covers/2017/11/klaus-2019.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img3.acsta.net/pictures/15/10/27/11/39/443790.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/96/55/00/9655007323949721f086360313098c5f.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img2.acsta.net/pictures/210/175/21017552_20130704150427338.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://vignette.wikia.nocookie.net/vvikipedia/images/b/b2/Matilda1996.jpg/revision/latest/scale-to-width-down/340?cb=20180912214036&path-prefix=pt'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFRUXGBcYGBgYGBoYFxcXHxodHRgbGxcdHyggGB8lHRcXITEhJSkrLi8uGB8zODMtNygtLisBCgoKDg0OGxAQGy8mICUtLS0tLy0tLS0tLS0tLS0tLy0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLf/AABEIAQoAvgMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xABEEAACAQIEAwYDBQYFAwIHAAABAhEAAwQSITEFQVEGEyJhcYEykaEHFEKxwSNSYtHh8DNygpLxJEOiU9IVFmNzk7LC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQAAQIFBv/EAEARAAEEAAQDBgQDBwIGAgMAAAEAAgMRBBIhMQVBURMiYXGBkTKhsfAUwdEGI0JSguHxYqIVJHKywtJD0xY0kv/aAAwDAQACEQMRAD8A8NqKLqii6ootXwDgeGv4cO5uhw5RsrLExK6FTuJ5/hNSaWOKMOc0myQaPtyWsFg58ZO+JkjW0A4AtJsGwdQ4bGuR3CsXOx9knw37ij+K0p+qv+lAGNwx/mHoD+a6D+A8SZt2bv6nN+RYfqhmK7JXluKiFbiuGK3AYUBRLZp+Aga69RE0y0B4zMII69K3vouVL2kMnYysIk0pu5degy18QJ9udLrvY/Ej4e7f/LdSfkSKyCx3wvafUfmiuixDNXwyD+gn/ttDuI8Gv2ADdtMgJgE7E9JGlaLCBaC2VrnZefQgg+xpUihiYMHYxp86qjut2LpNqla6oouqKLqii6oouqKLqii6oouqKLqii6oouqKLqii6oouqKLqii6oouqKLX/Z2xd71n95A49UYT/4u1CxWuGf4UfY19CUxw6XseIQv/mzMPqMw/wBzQt+vDLh7qHARWbOjIGFxDGxiVYGYI60hguI4VsPZz9T/AA3YPjuDey6PGMHjn4sYjBO5D+MtAcCdSNiCKBsclDi7QsIGcHKbltf9822nyyuTrzAo3BiZWSNPwmh6nT6H6IH7VYljJcPLGf3jCXD/AKW94/NoHkT4qvxHDdxauXXVnFsAkIQDEgMZII0BmKTwUTJpXRyEggHbwNH2Xc4rxeTDQxy4doIcQLN0AQSDp1ND1ULcNTEWSBravICpO4O6ExzVtD/q60yx4wmK7Jx7rq18DsfQ7+qRxT/+LcNE7RUsZJr/AFN0c3ycNvNp5K61m5plLKkDKoJCqI+HKNNNvY1niGKngxL25yOmvLl7bei3wPD8OxXDYiYmO0o21pJcNHEki9TrfQhUsUlhmNq9cwxYbh+7zI24JmCddxOoJFdDDfjGyDtqc072W2PH05jmFxOJng8mHf8AhAWPGxa14BrdugrXYGtDR5KBuDYW8oYWLYRwfFb0ZDqrQQcpKsDGhBAHWh4vFuw8+V4BYdRQ1rnqNLB9/VG4ZwyHHYHtInObK3Q2SW5hqLBs5XCjobFkbhCMB2MRVcX1Zm7xlUq+QFAFhvhMzm+lbxWIjw4bYzZtRrWmlHnugcMwMvEXSU/s8lAgtzd/WwdR8NDY81FxPsMMjNh2ZmUL+zaCWMZmAIA1CshiNZNGDo3MYbouFgE/npyIISThPHNKys7IyA5zQRvoDlt2gIcDrpodrrMYjgeJT4sPdX1Ro8tYrRif0KyMVATWcX5i1SuWmUwykHoRBrBBG6M1wcLabTYqlpJUUXVFF1RRdUUXVFF1RRdUUXVFF1RRdUUXVFFqfsyu5eI2ByfMh9Cp/kKxK3NDI3qx30KDM/IWSdHsP+4D6Fe4douE32w7DCsEvaZSYjfWZB0ivJ8GxcEczvxFZS06uFgGxXI8rXT4uZpWMMRdo6yGuLSRRG9jnR35Jw4Q1zCZL6jvGtFXA2zZYMHpOtHjxcMfFg6A9wuA00FOABHld0lpO2l4YWzjvgEi9TbSS0nfWgL9VFwzBJisIhdZFy3DjrIhp+tTiE0mC4o57Otgcjmbr8yQiYF7cVw1sLyaGl8xkdofkCn8I7N2LFoWrXwCSAWzRJkwTrE60DiOMxM2UyxFmXS8rhuf9Xjt5pjhj4sO5/ZS58xB3byFfwgcq9lFg8ABeu2SOl1PRtGH+4E/66c4jIcRgYcWNx3HeY2+hP8AUluGTnCYybDD4Sc7fXf8h/SvOftU7H3vvC3rFpnDrD5VmGXST6iPlXW4VifxWGbzc3unrpsfbTzBSmJezDYh4do1xzDpr8Q97Pqp/spw12bmGv2riD/Etl0ZROzrJHOFMeVVxiCT8IZMp7hvbkdD86KLwziUcOMAjeDnFEAjdtkH2zD2Xor9nwefKBXknYuR7dbIAryFnT3JpeojxjInEtABcbPiaAv2AQzFcJayWNxC9sszZ0ElJ5Nb3gAAZlnYaV6R0sHFGtEL8r2igx2x8iPyvlbRuvM4PHYjg75DK3Mx7sxcNwT18NzR2s047K1heBJcXPbZWRhuNQR7VxTicTgJtQWuHzH0I+9135cdheJYcsf3mn3B+oI91Wu8McObZ1uBc1sttdUfEjeYn6hv3gfUQ8Ua+IYkEiMnK8Xqxx2cD/KdL9D/ADBeJmwYa/sC0F7NYzQ77f5XDYkDY77iwMpQS/wOy4t5LNoh83cZ0WFur8eGuaHQ5TB1gg9BL4noubKBbN9qynZ46Dexyo9BahA3jJAdqNTd6W07Xyo6XY/mdXnPbPgS2SmIsgixezQp3tXVMXLTeYM/2KqRtH7++vqCOS6WDxHaDKTr9R9kehB50sxQk6uqKLqii6oouqKLqii6oouqKJaii6ooi3ZLF9zjLFzKXy3FhViWJ0AEkDUmtsAJo89PfRLYtpdC6uWvsb5X0X0Bd7V4hFLPwvEhVBJOa0YA3Px15iPgOEeQ1mJBPIDKT/3rTuJYhot0YA83/wD1qlxXtjiu5c2uF4oNlJBcLlGm5gk/SmMLwPCxTtcZsxafh7oJI5Hvk78qvkhTcQmljLaDQRq7vmgeYtgHrdc0N+zntUwwNtThsRdILguiArOYmN/OmuKcH/HStm7UNOWtR0J1+IdViLGfgy+INsXYonQEDQ6IFwO7iMJxO9iWw+JGFfOYKMcswfh5QZrqY3DHGRPhzfEBR31BBugb3HslIZWQNjeAMzTrysGxVmhsR6o92q7ZC01nF28PfHdErcFy0yBrTwCAx0BDZSJpDC8HMGDlw87szXEHQGx46jew32o7o0mM/EYpkkXdcAasg3zrQ3VZvLfkjtvt7h8oZrOKSY3w9wxPmBBrjP8A2UxF917SPEOB9g131Tw43HWrfZzK+bgfkFIvbvCH8OIHrhr3/trP/wCMY8Cg5tf1/wDooONYY6kf7o//AHQztb2rsXcLcGHe6l9RntEWrinOuoGq89tdNa6XCOC4zBzOdJlLS0ggWb5jQtF6ivVK43iGHxLWgbhwO405HUO00JOiHdivtLNz9jjrTW3A/wAQI2UjlmWJUmD5GKHjv2eEpzYYZXfym8vmD/D5HTpSYZxDsQO0cHM62Mw8x/F5jUcwd0Ux3GsGjNewuJS3c/HbYMLV09GEeBo/ENdpmnMNgsZNH+H4gwPbydmGZp+p89+uYaLnTTwRu7bCEg8xlNEeH6bdMpsrA9q+3+LW8jWmRrYOe3mUFkbVWQsCA3PXYgg0+cHh4GuYxjcrxTt9fn57ddCt4YPxQD5XuDmnTUeBBHdvpd8xqEEvdvsYQystsBrq3vgK5bgIMqZ0krqPM1sEBwdlFgZRv8Omm+u3Px6owwMZBAedSTy3Ni9tDry6DoqXF+193EW71t7dsLeureMA+BwACV10kDX1NTOMuUDlW52Fe+256nqtxYIMeH5jpfTW78PHl0HRZyhp1dVqLqpRdFWouioouiqUXRUUSgVapcRUUXRUUU2Euujq1skOpBUjcNyjzqwSDosva1zSHbc17XxPid43OHYHvnzEF8S06uqiXDdQSrikoGshfPig0aE5aA2jbRrTTM69km+AyNZCSdQNCTvI6wD1ytrQq3juK4iw3EcVeuHue7y4e3nBWcsZoB0JaN9daXgjgcyCKPK4tLXOIAsZQSbPVzyAjTwTNL3PBbdtF88zqFD/AEtBJpX/ALMQMPw6wp+Jgbh6+Mlh9CK4/H2mXFtjHJrR6m3f+QXR4dETE+atC4+ze7/4pcb2hu3yMO2Du2kdwveMyZSoOY6Bs2qqeVdjAcIw2AkOLbJnyBx0y1sddHE7XWi4mKxc2LY3DuZlzlo1z3uOrANNL1Vb7Sr4v28PhF1N/EICP4F8TH2ApL9moMplnftoCf8Ac76BdHi9scxjdwCR5nuNHqXfJXO2/aOzhLFkuGKd7bGVAJIXxAakDdVquBsdLPPinaEggGrpz7PUbV1WeJ4dzGQ4Zg2o0dLa2geR3vojL8fRbBvuCoFs3CpiQMsweUxXJ/4U4Y38Ix+xrNXQWTVnbXnyTwn/AOTGKLd9he9mm61z05c0N7L8fTGziwrIjAW0DxmhScx0JEFjH+mulxKN2FwsWDjcXOJLidib7o0s+I35JTBQmbESzyNAAAb1A0zHUgdQduar9l8QrXcXi32u3SEkf9q0MgPoWDn3pnjAlaIMFE45qF0Tv8I188x9QUHh0TXslxbwMos7f1H2GUeYKs8Jx627D3Shd3Z7uQAZjmPgUTzy5RV4+OXFcQbhYpC1rGgEgnkLJ3FnYb7rGFhGHwBxUjAS91gV1NaaHTc6Dbkl7TiziLS2WRSblxNwDlAOZzPkqn5ig8HfNFNNI+Rz442nckh2vd0JO9GkXH4UFsLGsDZJCKqrGne9BeqXjvHUsW+8XDC8qhmeGtpkUCZ8W/PbpQOHRT4wu7TFPa69AHGzpZNZhQ/uj47CswtZcO0t61oNQAPhKw3ZvtnhcTxJrr2XBuJbsWLQVWAky7NqAJMewrvTYef8IIYpiCNS9xddCydQSRy57BcwwsY/NJE0t/lFVegGhAvny3K9B7RY7B4NUa9aU944tqFtqWLHbT2rznDHcRxznBk7hVbudz2HPofZO4uHBYcAmFp3OgbsNz9PdO48cFhLDYi/YthFif2ak6kACI1OtVg8RxDEzmFk50s3Zqhz666V5rc2HwscYcYRZqhQuz8tNfZR41MDbwpxVzDW1thA5BtrmAMRp11GlEbNxJ2MOEbOSQSCda0Fnlem226x2OE7ATdlvVDnqdOdfPZeB9vOKWMTi2uYZAlnKqqAoTYanKOck16mJr2xtbI7M4DU9TZ8vLbkhwMyh2lWbA3oaDx6X6rOxW6R10VFElRRLUUSmookqKlqOwVi22IYXLedskpPwq2YQx1kGcqiP3qhLgxxb8XLS9b/ADNBUI2yysZILYSc2pGgBJOnIAEkaXQFrcrbs3st4W/FIy3DnLFQ8LlcE5c0bE7XAaJJiHRnXvEN3y7uJ7osbDzOtpfDcMZO22AMY5/wl/wxtb+8NEguN8wDlLSPFT43C2risjIrliAveEmCdMyqZnKCGI5eLWiNe90ha491oFmhRIHe1PTTQeKVfh4osM2SJozyElozEOawupgAG90dXeG67HcfWxaa4c3dplUKsSZMKonTYE+imvNR4QY7ESSv0G/uaA9vkF7fFPHCMJDCxoc890WaGgtzjV8/mQm8M7Rd/bF4KyiWVMxBJ2ztpoBso9WprEwxYXCGGO7edSd6Hl4/mufw2OXifEfxEwAbE2gBdZnX18NT07qVr6m+t8sSy2yiKQIUsZdgZkkiF20FL/iWNwf4eNps2CfM61z1FDyXR/4FLJxE4qZzcgILQLvuihelAAlztzqeQCAccxP3zH27JM2sMC93oWkFl6HXJb9Sa6uFhbg4KdytzvPkPo3ztecxDncQxZEP/wAhEbP+kXb/APuf5BqsdseMs1gWQ0NiXCAzoEDDMfTMVH+6k+F4Y5nTu3caHrq4/Qe66n7QvjhLMLGNI253DyBDG/U+jTzWgTNat/d0S4EVDbUqpkaRmBgieevOguznHdu6MnKaA10rQcjtv5plnD4XcLEAnY1zwC5xIIOY24VmGhFt32Spc8HdBcqqoXINItjQLHLNEa8sx6S5hsNL2j8bIwl38La9B6AaeVnouTxCXB1FwuCVobvI+xVA2ddi4nU1zoHQmq68W8b28wzqodvGoC5mhV15kZm30AHWlHcIdJC6R9mQm605nn4nU+GnVdNvHMLHjGYdhaIACM2u4H8JGlDRuxJN9NW3uKKGzm9bzFcuU3bQW2PxR4tcxCkkzGWKZlw0rsK2FkYbZ72oA02589ze1Vsk8LLgY+ISYmafOAO53Xk67jRtDLsK3DiTqh3FeKWLyMrXFuErlFpMQ/7RvwDIjwZYiSRtR8FHiIg2ItaGjodT7O3JS/FZOHSZ54pJC81VsIa2qF95mgAF76nxKZ9kHZW6mPuvftlDhhlhh/3G0EdYWTPmKR4ziexwZo/H3RW1HUkeFaeoSkJE0rQNh3j6bAjkb1/pWt40fvvGsPhxrbwaG/c6d4YyA+fw/WlMH/yPCnTfxOsjzPdb7auWZ/3+Jy8rDfQd53vo1O+0X/qsVguHLqLlzvr3/wBtOR9dflQ+AsbhsNJi37cvJuv+51D0Wse4ySiNp1Gn9TtL82ts+RVH7cuLC3hbeGUwbrSR/wDTTX/9ivyqv2dhL3SYl+50vxPecfp7lGxNZ2RjZuv5D8/YLw6K9RSGkiqUSVStJVKJTVlRdVKLqiiMcH4393t3FW3L3NM+YgqsEQBG+rGesHkK20gDbnf397+SE9jyTRFEVtelgnnzoA6bWNLKL/8Azww0TD21AgAZmMACI0jlA/0r0recA6N53vz/ALcvIIRgkLSDJuzJoP4bs1ZNFxsuPOztaae3d7UC1aAaSQe8IkzO76TJ2jc1luUNc2tHb2T+v0R5e1kkjlL6dH8JDWCqFD+E3QGl3XJCeMceu4lVVwiqpLQgIBYiJMkyY/M1hrWtGVgAG+n2VuR8sr+0meXuqgTWg30oAa8/Tom4Hjl+yndo4ygkgMiPlJ3jOpiYrRAcKIBrqAfqFTHPjJMb3NvfK5zbra8pHvupz2oxcR3xE/uqin2KqCPao2m/CAPIAfQLLw6QU973Do57yD5guIPqqGD4jetZjauuhb4irFSfUjXmasOcNisPijeQXDbbwUWLxVy6c1y49xoiXYsY6SeWp+dU4k7lbYxrBTAB5Cloex2BbE3Sbty4bFoTcAdpYnS3bXX4naAI862zMef396/Lmk8UI4291os+A9Tt978itinZTCKGmyHYL3cF3KviXM9fgtLuecN+7VFzcw0AGpN3owDc+Z2/03zaUqDiC094k6NFAA5ug0311/1VycEXwPZbh6sf+mVlRVtjMCxd5/aOddYgCOocUhLPK1jaFE274bIbs1tUdTpehIp3guhBhXyyP75IBDfioF27iNRQGoHI21EU4dgU1+6YZeUm0vl19/lWc85sgu//AIF/IDTUXqD8WthadhmDQvHrJ+pO9GtDu2wNVYw2LwyHNbs2fDBOVbXhOpBJAldBvptSWMHEHMyMDtSRYLhpyHxc6JNigCBdgpvCYTAOJfJI3ugHXKfM35kAcyRdahHruONq0+KuwiKhZupAEiehriMwzXvbgS7M7Ny2j/no89BqB3bFgk2tTysbeIhFCuehf/Lpy1OhOvIgLO/Zbg27m9j72lzFubhJ5WxOQT03PpFO/tBNnfHhIhtRrxOjR6D/ALkDAsDA6Vx0Fi/LVx9Tv5KPsCPveLxfE2+Fm7ixP/pKdSPUgfWt8bc3C4SPBs9fEN/9n6+izgmmSUyO5an/AKncvNraHqvL/tP4ucVj7ja93b/ZW5mCF+Ij1afpXfwOEOFw7IiNQNfM6n2OnkFhkglLpAdz8uXy18yVkstNFETDWVa4rVUokqlaSqUSqKtRdUUSxVql1RROAq1SWKulLSgVYCq0pSpSlpQlXSlppWs0rtXMHxa/aULbusihs8LA8URM7kxVhzgKBQnwRvOZws+vLZIeLYg/9+7pMftG0neBOk86md3Uqfh4f5B7BRtjLpEG45HmxP6+dTM7qrEMY1DR7BQsp5z5T+lZRAK2XtfZLshg8PhrLYq6FuSLzI10Lbz6FcyTDZQANec+dcnG4ziDJHQ4aE0P4qO/Uagact9RaTjbhZz2ssg12Gnw+xOu5qtDS0XG+03CriG1iMTZdDugYmY6hd/SuJgeHcTwzy+JgBIq3Fh09SfoujiJsNMAHZjRvQO38wPzVK59onC7aC0rsyBQoVLTkZYiNRERTDeCcRfP27ntDru7N36Nry6LH4iERdkI3Fu1afm4H9UOufaxgrS5bWHuleQCoi/LN+lHk/Z6eV/aTT2etEn3JCqPE5G5Y4wB0uvoCvNu2fHFx95sRJSAqJZKkwgmTnHhmZJ9RXdw8ToGNi1IA+InUnfb18dEJjQLcaBJ2G3QfL81mWFHK2E3LVUrSEVCFEw1grSSqUSirUUqpIJkaRodz6VsNsE2sE0QE0LVK0uWoonBa0AqUgSa0Ask0nrarQCyXKwtmRFby2sl1KLuYNYy0tZrXPZqFqgcoGShkIlpMlZV2la3FWqTwzaGZiInWI1iDpHlUUS91OtapZuk9LXlWgFklXbeFOUmNhPt/ZplrNLSzpRmpVyn9x8qEQjAqFkrFLdpnd6HbSPU+QHzPTTeSAckLQKRQOY+u/8AKpSlqG61YcVoKI0NbTaiictWFSkrSpP7s6ab6jzH9g1qlVpwSpSq1Klua0Askqe3h6IGrBer1nDzRmttLveQphgyK32ZWO2BXX8JPrVPZooyXVQjCmIoYaimTmo04c9xgqKzMdIAnyHtEUF4DRbtEdji7QarV8F+z64TN8BSVY27czncKWUMRoFJWCQefyU/EMzZR/b+6Z/Dvy5j/dWexHZPD4uWu6kZvAo7s6RuN9zQjNIX5R0tMfh4hHnOuteCXiGAwoL2fu6IzHKjGZQg684ilIsRLZzG/wAl0ZsDDlGUV+fqsrd4fkHxLJGkMGj1j8jXUZiWFhPPyXFlwb2yAGq81Bwe0C4DajodvlSkziGaLo4FjHTDMjPELQ3jcfl/zTPCZSWuYeVFL/tFhwyRkjdLsH0qkAutT7nLkMaVWukbj5c/Py3oRKMAo8s1VWr2SXbcDXyO4P5flVkUoDaqPQSEUJhrBCtNFUrTlFaAVKVFrYCySrCWj/fP+4rdFYJVzD2Cf7/vrPtWqvRYLgNURbCu2igsApOgn0ojgAQgtJNlOs8Pu87T/wCxv5VppCy8Hor1jBkGCCDzBEH5GmGgHVLuJ2KMWMGMviGvKiIBCgucOyGW/wCagAKouIVvh/Ae9YEytrUvc5AeXXWBpMTSeKnZENCLT2Cw0s51BpbazhcPhbQNsIBBOcwx23BzDX2rz80pPedqT6+230XoYosvdaK+Xv8A5WB4r23xHflLbo1sbKUAE+0H60VotmopZ/8AkoFVstzN36sVcmSUJQ+8Hxep3im+H9lKSx24+iX4wyfDBsjfgd05Hx8+R+zU4hxS/wDGYZpgsRv6idSetZxOAa03WimC4s9zclgnxHL5BaHgnZF3QYjFMbRufBaVAhOmhIOxO8R+eiktMbSehe58hdp49FaPZ620QAASACwETtuPOucJX9fmuyRGAbaD5DVZziuCa02S4hA15/kdjTmFxBYS5nqk8bho8Q0B2w212+/FVW4SqBHeWUqGI+E/ikEEZtgpkSNG16djtSRdLzfYgOIu1NeuYJx3dvDXA+X43G5j4gATAO9IPOIDs2bQbhdGFkDhky6nY2gKYUiZH/NduOOxYXEfJRyndVcQk1l7FpjlSuJQHBMNKguLqYH6/XnQSFsJKitPC1oBZKsWRRGobkVwOCa4QFUsWIUADdjsB56j50RBJK9s7PdlsNgrCteW2bkAu7wQG5hZ2A2Eb0PMSdEQAAaqHjXaZGGTCX1VhuMhDEfwSIMdBrWmNBPeQ5JCB3VnbXDjiLgFy/cugjM0uYMbfnWjpqsi3aWruJt4dSyuGXIBA0II/eUnbpoRy11qml24VvyDQqlg7Pea6gDbSQR5RqD5a+tGOJDdHJQYfObar/AsPaxOS5dP7EhmQbZgpCmemp+lK4jHtjGW6vmnsNw50hzOF1yVrjPFcNLFcUi+HJlOigA6RpI9v0rjTBx77bN+BXosNLG0ZH0C3xCx9/E3L0DBMSkxcfLAzkmMqQcggRm0JgddaDMrbf7LTp+1eAyvND8RwzFWWIewjmRqLY59WHOpmjcPiI9VthkabyNP9I+qdh+I65CMvQcj5itQudA/tWa+aJiWRYyM4eYEcxX1CjOPtq4S8saiW/CVPMjcD512YseJIznG4K8pieFOgmHZnYjf8vv1XqfHMbav2Dct3rdxA0KbbjLIUQCQfEQxBK9CJ61ysQXAXf3/AJXawQa51V93+iA4bDgNJGhytyzDrqNSD0JIrjSy92l3w2tf8J/G0XEYdjcstcNtpItuqsy8ypbTaDG+9M4Ou0C5mNBjZpsfkhuGt2b2GzW8NdFsgglrme54o0zM2Ychpt5U9LK7OACkoYGltmkExOMsWYV1uWyYZTdt5gRzgrmnmddQaG7tJb19jSYHZw0HDy0tVcdestJVhmOsKGiDrJkCNPnXR4XNO1wjdq3x5eS53F4cOW9qzR5rbn5/W+aB3ytdh5auOwOVO4w3jSgOIR2gqncNBcjNS93Jn8qgZeqrNWif3RrWSlWcFT2UqqVEr0v7KeDgs2KfZJS1PNyPE3+kGP8AUelYkfsFTG62tvj8LaJm4Ddb+InKPRRoBWe0OwWuxB1csT27wSmznRMgV1AVJCkkEkldtABrpWgSdFTmAaoP2d7RvYaHRbincmQ8eTgidvxTW7J0QtBqi2P4nauXQ9m3ckR8b6DqMoHiEaatWhdUhOIu0c/+IZMONEts8kCIAUTrH4dzHLWedcPG5XTaa19V28Aw9nbtFibXFWuP3SnKhYtcOVTlQkZsgI8JYnXzbpTMUBeQHKTYlsbTkFFGeKcJs3RFs6HYbMPTr+flXU7rm5HBcUBwfnYfQq99nHDhZ+927wU2yqOGJyr4SQ0tusArNIzQ5bzLpQylxGXfpV/5Vq+ktdOYauSDz1/pGh/XXgTyEWDta9VA1tNdWtUsR2ky98qW4LhmZjtlB3HvM+1MYW+zJdtSDjCXSMY3cX6D+6GcRxAa6qZiFMK8AHwgksdegJ+VOQsIbZXNxsodJ3fJaHhXETgEuYS7bLWXfvEuDWJABUj0QHXnNVMC9vcQ8KWskuRGMBj+/OW2pCbFiNI6Ae/1Fct2HI1cu527C3TdQcZ7SLh1QW1MOzEkzGmwDDTNBPtT/D2tBcTuuTxNsjsocjXZ7jVq+lnuVcKqshBC/EP3jm1MFTPn50LFin2iYPWI+aB9rMOHVmuN8EsJIAWNhMGJIA9+VAw7j2lDmujimN7DNWy87tXSZYnUgfoAB5ACvQYVtOscl5XFOzDXqo3JNOalKigmFalUru1VuvS73IzQrOFuUeJyDI1GLFlWFPhjXBJOe5qsJwydhNZfCAqExK9B7PYS9ZdLJUqqpz2/euH1Z3UeiNXLkYHG07E5w0R28CajRSYVfFcG7+06FjbVt25A9YO/0qFwB0WXNsUg3A+xDLcDC6ly3qG0YZhGwBEH2OlRzqHihNjs+CMv2TtWVBl7hmYAAHp1Pz2BoWIncGd1bgwzS/vLD9sOKXLhZMyhRpCa6jkW6+QmudBGAb5rqSu7tDZQdkMfhLaMt0taumf2o10/dKfC6babk9dBXRY8NXOkY5xVjFcbw6q+R4YH8Kko/IEH8IgkwdN/StF7C8OO6GIX5S1GuAce8PfW3tkoALghhOafi0kfCdesHlFEc4OaACtMGX4lU4rjrwJNtbYtuYDZpeYJ+H8OgOuu1cWXh4Hecdl38NxTMWsDfDdCLmMGDi862rrkkAsCzZiZzKTsQBFaw77OQN0V8QiIaJHO1vYbIXwS13pvXsudgMwBnVSzZ9Rs2hj0NNkho7y5Qtx0W+4bet3Vz23i6wCkKQ0qM0MoglRDkFTqOsQSCXQUNkdu9uQji+LNh0tqTncwCNAsaHKNZ0J1JOwoZOdpPRMR914HX5ICLpLhHAuW7gVXQRIIJhlnZhrrptWA0BtjQjY/kUaRxLy0iwRqOniFUxKYnAgrZvlVYjOo0YaaB1jwkjmI840orHsm+IapdzJMPq06I7wfFXcVbNrKqI2jGDqI3JYkml3YbK8OaupFiI5WEyG/BCO0HZ82T4YKcogR6gfnXbwkwd3HaH6/3XmsbhTGc7dW/Mf28fdBzYy6munkoLmB97KliX6UvIUdgQ9xSbgmgrNpaOxBcimDcino3EJSRoK3HYu4rYi0H1GafkJ/SrxD/wB2UCJnfC9aa2lwagMNv7NcrUFdHQqi/Ccv+G3s8sPY7j3moXLQsbFU2XKmfFuqhdMs+ARtE6uT6T0FQNs91S6HeQXiPaR7vhsg27fU6Ow//keQ1/KmWQgalLunLtGoSly6pBS4ywZgE5Z/y7e1acxp3UaXDUKDiHAO9DXLYhyplD+8dyhPXpvrpNcuaAsOmy6cU2Ya70sPisHEp+LN+ekR7VLVbhVNcwQbKdehiq8VodFpfs/JXE90Sq96r2wzcrgGa3E6akRHPUbxWmO1WHt0Vzjtu4LxRvizZZhVDwdCFUFjvuY9aaID9KSrXOjN3qs72pcKLaFs7EAvyCjUKijlJzE6knToKRbHlc6hQtdKWbNG0E2a9hyH6pOx/E3S4bQZFS4NS0jKVzMuVhqD4mHnm6xUmALDeqHBfaAN56LbrjhZs3GUCVObKiau2wkrObUASZrnnLKQCaHRdR0L4QTls9f7b/RYv78z30e4xLc50jXYDlvTb2jsyAlIie0BKt8JuJ94uG4gddue51B0ZfOd/iGlCfpGNUdlmU0Ef7VYVb2Cb7uyxaykohzCF0K7krAJgEj4YpaEhk/e5piVpkhIG419uSz/AGaxgOn612WkVquU0lacvnUiByG2kVvK0jVbzkHRYzj9kJdZV+HQj0In9aew73PhF+XsVysVG2Odwbt+oBQS6Kpyy1VLlLvRmqzao7UJyJYS0W2pljSUu8hbnsbgWUvd5gZV8jP88h9jQpjrRVN2sL1Th2H7u2idAJ9ef1mknGzaaYKFKa44AJJgASfSqAtbWFvYP7xcN24SdSQDqFHQdBECKfHcFBKluc2VDi7ttCAFP0+Yq6JCvRp2VjBAH8Oh2BnSsOBRwQrWKxSqMsaxyjT1k0MMtWXgaIDxHD20FzFlZuJbYLIEFzopjXXekMVG1pDRzTELybJ5LD9luGPfvd2glmnfkBqSefKhvBOyIxwbZKu8dwn3IutxM7kg2iCQgKk/tJ0OhaBtqDtFQAgqFwIUS9qb3+JdUFjoWGhY9SOv08qZZPWlJd0J3tXOxHEbdzHIWsm7ltOYIBykBYYjmNCsanx0N72gWtxxuc6r8Fa45wS1exBuNaKLlH7NENpT5u7czOw6Ug/FGtBX30XYg4c0nvuvyVjiOMJAUgQuVAo11kBf01FKgFzrK6jmxxxHL0VEYRbjtIDAs3UAmZ8LD4GBn6UMyljRX359UM4dr91Zt8BVWDWbjDMxzZwDlJyjlrsOc/Ws/jC4ZXj+6GMJkJLSnphHsqXzZyOgCkzIg9VJHXeDryoStkOXZFyuj726yN5MpF6wIVj8A/Ax5en99K6schvI7f6/3XLxGGpomi+E/I/otf2dwzXLQa4ZPikTAkHfbX6jSmHvLRSBh2B5B3CyHaR4vuAdJ6z6iefrTmGcewaufjGj8S/z/IILcUnzrZsoQoKvcFBcEQIhh7U05G20q4o5gcN1MU4G0Eq5y9U7A2M1jbwrcPIbj4tdyJJ3rlyutxKbiGi0N1nUkgsJOx1H129qWDnXqjkBQ8avHuQBu8A+Q3P5R70xF8Vob9kDN3LCjWmt1jwU9vCK2pArJcQjBoUOMbL4VGv5VbddSsOb0VS3gJ8ya1nQHM5KPtLgxbwN0aFtGPkJgfqfeuNNLnxF+i6UMWSKll/s546LF428pIvgKx18Lgnu2EHYSZPKZ5VonkFYHM8louL4zLl1W6GWQQSy5W8Q5GQcxMdDXIlY66J1+yvQYbs3M7o0XlfF0C3WVTKjb31+Uk104iSwFy42Ia1srg3ZUAY1BgjpREBS4e+5uJLsfEPxE86pwFbLYkcDdn3V/D9onJDXs1xhqDmCiepSIYjkZGw9aG6Efw6IrcU/TMbpGOGcatAwGhTyJgz1139qRnwzjqurhsazYlH7GOXMCCCDvrvXPMZA1C6fdeNCl4njxbtNG50HmTsPOrgiLpASgzupp6oB2ZwzI8XAZ115Qf7Otd5gsZxp0+/NcMgteYX6jYjz/stVw3Bd0MpMqzFlbY+IEwfOfnNBMpeHAjXn4pmKARVlOnL9Fg+J4ebjt1Zj9a70MOWJoPQfReZnnDpnkfzH6oZfAFU+go2yqDCTqYpV2pTI0Wu4fwYtGse/9KdbfJJk+C02C7HMYIfz5R71l730ra0Fa7srbxdlBbuawTsgyx/mlSflS76W2ZhotL31z/05H+Zfyn9aHSJaq49HYaIQB/lMddm/KtNICy4EoXw/h4uSwJMHURz+dGdIWrMeqmxVplYIARI+IjT0/rWc9i1u9aUuHwED9awZEdtKT7sBtpNDdKa0VlgWY4kwxGGxLjUFlFuNwVmCI56iuYDlNpwtBAHgsfw7hpwmHvX7gi4bZFofugiC3kTIHpPWmrS43QRsSVyq124iG1a8SEnIwAhguYTtB2/Q0aNaK2ki6Kfdxlu4+d1zGd5nSIGbnOmulBc14uin4pISBnbsh7W7bZoGixr11g6dPEvyrduFWglsbrrYV9f8K7a4daC94pnKrP6QYHqN/wDx86F2rs2U9aR3YWPsy9p5X86+/RZzujE05a5lLre9UVYR1AVwOdPCy3dxvBge+ppVxBmynon4y5mHzNNG1PwfvXIe42bSF0/IbVTw0aNCdwxkd33laG0kZQeW2vPmPQ6+8UbBvzO7F3p59PIoPEosjRiY+XxeI6+YUmK4wFTKTpG3OY0HlR34Zzn1Xn4JVuOY1hdfiPE9FisVeJrqSOXBY2kOuTS5TAUDLQiEQL0rg10aTRwTyWQAtnwziVsmNvMj+tW66UFI62PtqpbOogSdJ0FAO6hVvAcRt3VLI4YDQkbTWSCN1gEHZM/+IjkNOuZfymsnRaGqBcBxRt469ambbxlPmRmUeo8Y9xRSbaChNFPIWxihoyZctTVK0F47PdOlv/EZSFHPXQkdYH50GV1BFj31WG7V3PuHDVsA/tbkj0LauR6DY9ctLN776Ow1Rz3W36Lz3C4y8bLW2uMbcrCkyAZkROoEA6DSjupDarl0tmtZIzG2u4kaSPyoYfVkozYy8ho5qgvB7hJylWIE6GDVGdoGqMMFK4kNokeKnbA3bCh7mU5iVKH90jWSPUbVlsjZSWt5c0R8EmFaHv56V4eKnw+I/ZgKCAGIk6zENB/hkjTnFQsp+Y7qjNni7NoofZVe5aXISQDOwP4ROsnmdIB8zttRb6JSiRqg1pfH7GtnZDaNVqMEofBXrZ6gzuF8YOp5fCPnST7E7SuoxodhiFFw+1daEiEnxEnccx1g/wBmjvyt15q4hLJ3B8PNabCZbttCo0JZVPMgfi+YpSQOab5rowSMc2uXjz/yh+N4YG1mPWvR4LEdtCHHfY+a8hxDCDDzuY3bceR+6QPF4EL+IUdzQkw4hC74AoDqCM2yqTtQSUYBbbhpuaA2bmvMZSB/5UZhCE4mlo8O6oNVvk9BZY/UE0VwtDDiOSv4LFqfiW6vrauf+2gPFLbXXyV7ivFO6trbw48J0aFMgQI9NzWRRNlU62ighnB8AmJJDs6tyGgBHuPOqlkLdAqjYHbq52gwQsLlQkESQ34i4IYNPXeqa690Us00Wk7G8eOKtEPAu24D/wAQ5NHKYM+dYcKUY6wj7NG9ZRKtY3tBxWx32W5KlRmRhJnqNNQaSlOa6TcTC2rC8x7S4m9i72a6pAUZUXmF6yNydyR6cqkeVrdCtPY7NqFUx+FFq1bQH4mY/ID5HxDy0kb1THFziUWRga0AJmKvC2ts6Em1p/8AkuL+n0FaDbWA/IbV7s5MljqSQD8v60pi+QC7PC7Ic48ypu0tloUqpKgcjENOkfTSt4IW0k9UtxZ/7wNHIfX/AAg+GdbaEOVkuxIzCQCqx66g/KmXtJNhc6J4AIKhxt4hfCNDzOg+fOo1uuqj3aUFR4Vg3u3cqAFsrECQJjkJ3Pl5GtuIAQmfEtFgAfueKEEeFt9NVfWkZNJ2ffJdWL/9Z3haG8Gxly4FsrKrBmDqwJ1A6bxTjmgd4oMEznDshsd0Z4xiHw72Ra3sqSRsGEqCCOhg0uynXm5lMYjMwtyfwi0VxZW7bW6mzCR1jcT56xTXDHZHSRnkQfdc/jH7xscg5hZzHW66xK4gag961QiEUFU3t1ghEBXrHDUqMctELQYUdNfTWiOcqAARXDFuQ+Z/lNAIKJYV9FPNoobgFNeimheZJoeZoUyuKr4mxZbR7at6gHy3rDsQAttgJQjhuATD4zvLQi29plZZJhwVI35EA/LzrUWJEmiy/DGPUK7xTikaCre5aY1YDi93MxZv796SOpT7aAQa44nf2PLzDDatBqhfyQrtFfYsuhyhfijQsSZ1iNgtbiAAQZnElD7njFrWSFII6ftbhj5MD70XZCGq1HA7EKD1JP6Vy8U63L03DmZYr6lWbHErbX2sXB4T4QejQP8AimIQWwghcrGOD8S4HwHySYvs6qNA0P5+hogn6pc4fogXGcLlGqtz1JmiNdaE5tLOsSrAiQRsRoR5+tF5IY0NrY8FxHe2MRbO7LiDPUvB/OubiO7Ix3iF1cOM0L2jxQXszcCwQPE3z38IHST+U8qdkBKBhXBo8fvREOLw12NT+y+YJb+QPvQBp7p6g9xvm39f0RrgxH3W0CNO7SPXKP5GjYZ2XFEdR9CksZHeBY7pXsQhPED0Fda154rPYotWSStNpUXFYRAtVg+0zWspy5s2u/5AzG4qg5WWre9kePjE2zmHjQwRPI7H8/lWXzUjxR5gjN/iOXalZcQ7knGQBUMP2gVrot5wGOwmJpJ/av73JFIiZpeqvcS44LX7O3+0vtELBIEmNTtO+hI2J5UeGPS3JSV9mgg+NPEsN+0uG1dtsdbK3Juqv7yTGfrlX2FHkgY9tFBjmcx1pMPx9XVbiNKnX+YP1Fc1rHwv1XWtk0ZpXMec4zJrIBHvXWoOFrjlxYaQheyOJvNLnubfmJc+i8vf60MRonalaXgnZLDI2lsORqXfxt9dAfQCtBuqwXaKPtvw1QFuL4ZhSANNJg+vL2pbEtA7wTmBeTbCsHf4NbPi1nqIH6UATOGidOGYdVPwvAXCoKnOASMugYCeXJvTT3paZ7S+ua6ED3RRAnUfMfqtZwXsfbtAu6h7ryWZhMT+FRyAmJ3NPtcQA0bLjucwvLzuTas3+EAjujrHwHn5qf0NYya0FfaaWsdxzAESrctj/OrYaKjxmCy+A4Yl0OjaPyYcvbmKk0royCNkbCYWOdrmu0PVX+xtoredG0IlT66A0tjnWwOCPgWFudrtws/wlTbdgfwZx56SCfWBA9fKn3mxY5pCBtOo8r+/yCMY7xXmAElbaLp+9BP60vyHiV1Yxb31yaB8lpsHhwtoKN0VR8hvQ2yVO13j9VjER/8AKOj6D6aoFxEnWu5ntePcNUBxSmpa01DrlqqRAUrN4E/y0EFMEaI72M4l3eIUT8YKkfl9R9aqQWFqF2Vy1OPv3r1wW0zKDOoUkmOlBDRuUy+Rx0Cz3EOB3MLcX7xm8clSfDoBqTv5D38qODe4pInegbV5hcwL5rjh3CyjK+Zcn4Qv7ukCP0peUF5pMwuDG5uaofd8ViRcxRYmCM2uonbQcqw/ERscGHcq2wPeMwV7gLqt5e+LC2/x5YBzdRPOfzNaOV415KBzojY5r1/su2HyEWZOXmdTr57fKjxZaoJefNmsqfiN0zArRKy0BOwxKWwebGfbl/fnQySBa2ACaQ7jNnvlFuYzc+jQcn/llpZxzHKeaaZ3O8OSxGLsshKMIbp1Pl68qSI1XXa8FqI9jLGYqDIhgYO+hn8hWMmbENCueQtwp9V6EyV3A0LzmYlDsVZmADBJ0PQiT+lAcwBwATLX6WVn+OYUXFzRB1BHRqVe73TsQ5cl55jLBs3w3I1bv3kdIuHPYzA8ireGTLiM+kOBHqAAf0pF5uLL0XWEdSuP8w+iyuLQffLq/hN0sfQnNH1rpRn9yD4Lh5axBZyv+6M8NGbEMTzuOfYMQvtAFBk2C7GFvK4nmT9VpbT8uRGnr0oE1DvDkpWa2nmocVwhjrGh612WOteMkjo0hWI4L1I+dFFoVUhl7hazuKIAqtCMNeCwFaxp+/LfSKUq90/my7Kzc47fQgrds+QtpoPPVRrV9mAp2zj4Ivc7Q3n7u/fxcGQAlvJ3gGoJIyyJjfzrXisXyVTHcXLXO8zZ1g5cwGZRqBqREzzyj9azsrJLkOxWMa6wk7Dy35agCf6VkuWgFsfs7vxiO7b4bibfxL4gfmp+Zrj8TbcWYbgro4dxbp4X+RRLtLgbaXFMrOpZUHwnN6/n8qBgpnlp+VpqVjXNutvna1vYCMtyP4f1rsYJxddrncSjawtrxRfFoxYKOZ+nOmXWkm1uhfF+KMLjINAsD2iT/KksRK4OoJ3DQtLbKB8Q7QNbXMTqTIEdD/MUvG9+ZMviZSsdsbcjOupy5l0+JDrE/P6da3J3ZKOxUg70VjcKv2GxyvdP74BJU6HbXQ+s/wDFKykwPzjUJiWTtYMh0Nre22J6fOulhsQZG2uNJGGlVsUSIJ5SfoR+tQSEvNrbWiqCzeOxtsYkWGYB7qllH+UDX3E/7TQJ2m8wTsbgGhZvj/DM4I5issflKM4ZwgPDL4fwn4kP9KBiGFpsbFdTBTiVtHcIBxrwY123+Fvko/lTuH70A++a4+I7mKcfX5BSJxBrRFwCWzCehkHN6TNQMDjRT0kxiYCPD9StfwrErchkMo2o6qeYI5GlJ2ECijxyB4zN2K7iTsGIExyrpYVwMTT4LzWOaWzuHj9dUBxeJYU4CueQhdzHMKIHKsiFYu8IgCkwnnKlmrSwnrUUVq7diAegH0H6isq0d7PcNFxGdgNWVFkkeIzH5UpiJC0gN9U9hI2OBLx5ea0/Z7A91ibBglcwzaDQ6gqeWjEj2pPEOD4ng+iZEZaG5fX5rcdpMErCe7WR+I6HlHi2J167iuNC8sdoUeAjmVe7I4U2VuK4ytKyJHSR+dej4bIHMLrXO4mczm5UZsqCSa6F2ucdAslxywM7dWM/yHvXOlOYroYc5Qst2ltEyiDMYj0Owgec0KE0bcmZNRQWi46GXCYcTLoiqfXIRv6pW5JGyNa4eHzVYRpa57fvT/KB8Dxirdt94CpDAfwsubWOhGkjypKZl305+C6JJLMvOtOhXpQdFIUc9R0ik4JmxlwsrlOY54zIdxbidm0juzEKgOb5cup8q6eEex8ndJ2/RYcxzRZC8s4rirjXExIcG67LcZBr3SprbtT/AJWM+c0+6q1RYWF3dC22NdLiLdX4XEjyPMfn8qXczS1pji05TyWB4laFm+HX4W39aojOwgpiJ3ZShw2KA9q0bvg8eF1AB813H5UXCV2ddEPiLSJ75GlWsXZMDpPvH/HyrZFC1oPLnZR0v7+SJ8AxpsNcbdQQWA3g8x51iVmcALUD+yz+BRziuJDBXRpV1kHr/fSrw1taWnkUlxHK94e3Yj6LN4u6T+KngVyy1DL2brWrVUhgoaKnLUUUyCsq1cw6GRE1kmgttbZpa7AaWUUaE3kJ0GhCnf51zpD3yfBdWBncHmjHCLZfEpqG8QJ5A+KIHTegSkNiNhEslxo7L0vit8JazZS0EeEbkjXn6VxKt1BChaXOpeb8d4+bt83EzKIAGuunptrXZwsJjbvqiuyhuTcBelYJzZw65nzkJJbfMSJ0PMSdPaum+Qxs1NlcgsEkmgpYq7xxnOZrcMDOhmNYWfkT7Uq54pOsgIKoffR94wyE63cRazT+6rj9aG5uaJ56NPzWpCWUB90tV2hwhIMCUMqeoIdipB5HxEdN6rD32LfKlURBJBOu/wAlisJbYXIzZgGI+GJ5bzVYiq2XVwgcWk3p5L0bFYm0ijOwMKAPly67VxntPaU1IxMe4aDdZvj2LwzoyBSwIJBmIaIB89qcwjJI5A8I7sO57CHrG9qltByUUzA0UwwYRmBETuwruElLQBvP5LXcet9zaNldMttGH+ZYVvnC/M1lxAdlQGW9ufxK87xmMNyZ339K2GUVC+wm4gd/Yj8S6j1H8xIoI/dyLon/AJiC+YQPCN4p1ppw0pc6Fwz2U9X8bbmTEDnrWm1WqG9xMhrqtHgeFk2fjAJM5Dpl/qf5VVg6hCe0/CfZCMfgLiHUUUJdwpC7taCyUPFRRPFUrUiVStafstw43RcuH4LajfmzTlA6/CaQxc2Smjc/kn8FGHuNotatgABgcveKTG8ZaWzWb8PzXR7Om14j6I1wKyExSkiArLAPIyND9fnQMRJcdBRsVgnwW57YYopYOUGTpI2Ejr5zFcuIB0gCHhW94koX2T4OWtFLtpMjLOsFiTseo+lHnlGe2u1WpX5Wgc1ctcHuWLOTvCy7lSJQQZAB+JZ8p9Na3+NcNDssVHK6wKP39Fm7eHZUCuQrXjIYt4chEz1kbAeYrod19OWTbLb009VluK8SH39Li/DZuWsv+hgT7kg606Y6ic0cwfoki7NILXo/EuMLcwsgQ1xmA/hIJM0nE7JCGnwTceHqY+Cw9iUuquuh1nWec1UpzMtdLDsy2B6pcRxNpJbXzk1hkQvRaL6GmiiwHERduouoGaT001I9DEe9PRxBuq5k+Jc/QHRScTxK4jGYdIGZnXMeeUsJB6gyflRBsh2Bt0P0RjtljAMQJOmqNvs2n55T7UH4nO+9lcYyxt+91iuHYeTfJHwKfn/YosrtG1zQoR3nXyCr8PeCR1rMwsWmsC+nEdUPwixdKnkx/P8ApRXG22hRACUt6FFLGFCtnXQmY5x7ef60IvsUU23DAOL27pvFCCjOSQygRHQ7SOkzr1FbiNGhslMZHpnJ1CFWON3F0JzDodaaC5ZNpz4y0+pXKfLaiAjmsEdEEFZUTqiivcNwZuMBBoMjwwWUaKIyGgvZ+C8BtW8OLIABdS0x4mMj5jSvLz4h75M55LuRsbD8I81HZ7NMLxBUkfgMaZvwk+XOPKrGKzMHXmjmVtZlp+EcEW0xcsWuM2Ykge//AD6UCWQvqknJOSKA0RXGYdHUo2oIjkY6H+tDcctUgxvc05goruNtWfiZRtp/SssBB0CJ2T5dgstxrtnaVzlOYFCsdSfLyp2PCSP1pGEbIm0862sv2txQbDWBzyL6wRO1dfDNIdXQJfEkFpd1Kwyv4h60+RokGmnBemhScPbUaggPvzzOD9CprmP0A8guvGbe4+JQvF3UNwgMJy5QerfzrLmmgaTMMo1HMoDesaagE6bbzz196Ya7VKvZbdk7CAojuREKEHvJ26ghZ9aYZzIScgILQUnY2bnEFbfLmb5I36xVyaMQ2m3H0RHt3f8AGV6z67j+/Y0vhhuUecgNAVfCL+yxNwah7StPmCA4+bA+lFduAgt0srOPcIMqpMc4olCtVTXuabaFDbcfeQeTifeNR8wahH7quiMx4OJB5OH387Rm48EDzI/1AZgPlNLgX9+i6L5cprzHruPkgHGMWGIVSCBOonny9jTkTMq4uKnEhoffh6IXRkmumoomioqThVK1f4fdysIob22ESNxB0XuHZDHpeVGI8SIoJPI9foB868riIzG4t6rtvJczMOaMYzjqIzLEEEQfKJJ/SgZNLCkWFLhqqHHOPhLWdWjN4VI16E69Yj5mtQwPe6iiRxNae/sFlcZ2tvPpmyzppM+Wgp9mCaNxaIDE0939UAxGJuXQWNwwTAnc+1OtYxhqkEvc4GjQ+anwvCiYOWJAINzw6RMwY+f1ohznRBzxNF8/FDO1WMylLa3C+VAHJg+KTGX+GCBr0pmGMAWkMRMXGuSzgvGaPSXBXptqy7WvjyqqIoUxBbXwqF8lk6mufJvr4LqReHihlm2ig+EMRDSRMRroSTr5isyuPVM4eNuti6VI4HEIutq4YKj4c28nSPLX5USmuKB2pa0BUb73AI8QBmQQfUzP+UGdNqKw1ogTd6jaJfZrb/6y4D+G02vmSg/U1eI1jQIrzkJnbh5u5us+0Rp+VCwpsJjFCgAEMweLITE2hPjRHUdWULmA8yomP4BTDgLBSgJohSXeHd1p42YaSB4c3P1ih583kmo25NrtC+Lqc1t10I195n+dah2LSrxmjmPb5pnGOIhyQkwYn1iD+g9q3FHlGqDi8QJHd3b80JNHSSaaipJVqJoqKKW1bJMATVEqAWjXDuFag3HC+S6t/SlpJj/CE5DhgfjNeW60eG4qljS3mmImZJ67aD50i/Dul1cum2eKIZQL+f8AYKXCYnE4hwFk66SZOmvPQbc6w+OCIWVYxEr/AIRQ9ytJ2iwtw4WzmhTBMkgGZkKF67HypHCkdqSNkWR4IcAsni7uXZBpuSdCfbQb102Nvcpd8tbBOw1pxr3YluZKH5EnStmjpeyEHUbpR8VweIvHM4cuIAaAWgfxB/5UaN4bpaWkZm5V6ITe4K1okXJECDKGFJmDKsQdifajdp4IHZDr8lUfCKkMz5hIkDQkT11j5VYeSapU6MNF2vRsJi7dlTatst1WW4UIcMQSBIJA0mD02NJSDm7RdCLcBupQK0byuQLJLuyhFbwroZ1nSDt71A1ryNdkYvfExxrfRFk4vicOTOFyoQoKh1C6fEcsHU6ctgJmtdm07FJmR12U672qS4kvh7lskalWBGbTZTEiBz1nTasGHoVtkhWat8RuWcTfuWlUrdEEFRM7wAGEazrr6dGA1jow13JBcJGyFzRup7rG8M13C3DuRluKik7blSQACf8AdVNyM0B+S0WSybj5hBJZLjNbBDLDJ+KCCNCeenzolgjVDyOs5Rr4LU49bl2xbeMjEKzLnKrBAgHSTpqfMxyml+4wkfPdNsbI+j8tkCazhvELzvbbMSo8TLlgQJgwQSeWsiitLiLahyNDXU+/BAsXZUNCkkTpIjT0ozSa1SkjReiq3LZFbBQiCFCa0spIqKly1apXcHvArDkRm+i0eA4a5AYjw/Jff+tJySgaBdCKC9XLQNhcGiqXMMIMJ4g3VTruI3pHPO46JoNjarT9q0toUw1lE38f4p6jppPWKwzBFzrkKxJKORtZ84m9dJ/aI3ikDOdPOCN/OnmxRxjQIRlkeeXkorpeCTalRoShKwY0JCnetjLe/usHORtp4FD0bKfjuoOS+KPKDPvRdxsCggAHUkJ6cQYbX36zmPz+KKrIOi1n6H790lnil1rmTvd+Z1nnsDE771rswBdIfauJq1ocPftNlF3KSmXU5cxEzIEwII5LHrvQiDWiICCQCrHF7cMHwyWyACCB4Xk6yTswknSNABprWBleKcUS3RG2hBuJYrFXFKtZYkAAkQQI15bVqOBjHWCtSYxz2ZS1CbNjEAM3dsI38JGv84P1pghuyTDnbpRimHxCDGsnr6xGx+XOhlg5I7JjzTmxQEEjfXSPc6a8hVZDyRu3ZpYU78RZSIuHUQIY8z5ba1kMJ3C2+RgOh5JH4ze0/aXANhBjQ77e1bDAgucLvqocZxF7mUF9F2Ea9JmdfWrDQOSw55J3Q7FXHaCSNPM6nznfattACHI9zqtQKxmT7Sa3SECbTWepSouUTgTWgsEBRsKtUUiVayr+CvBTWHiwixkAq5c4udZYn8jQhCEd2IKq3eIuZg5R5VsRtCCZnFMGPbmZq8gWe0KlHECd/wCxVZAtdqSpRjSBuwHOKrItiQhOHEdfiPv/AH5VXZ+CsTHkU29fWCZUn2n8qsNWXPsKoLkjUAD01JrdIdqQXv8AmKqldqa3jnWcrMJ3gn+zVZQVrOQrtrtHeEyQx6tqffqfOsGFpWhO4KwO0zEgss75oMFtvblWexC0Jyp34+jADKQRAmBPygroSdT1rPYkc0QTtO4UbcRtSQBKxy0PLlPi9P5VMj+q2JI+irXmtPEIFI5rIJB5RPT896sBw5qj2buShuYZSNzIEaH++lWHFW6Np2UD4M8jPLX+f61oPHNDMJ5FU7lpxyogIKA5jm7quxNaWDaZmq6WbSFqlKWkJq1SQVapODVSi6aitLUUS1FFwqKJwNUonEiorSAioqSl6qldpM1Wol7yqpS0hepSlrg1WqTu8qqV2nd5VUtWmd551dKWnLfPWqyqw4qRcYw5z61nIFsSuCf9+8hVdmtdum3b4blVhpCy54cqrgVsIRCjIrSykqKklWolqKJaiiUVSiWoouqKJRVK11WouqKktRWkqKLhVKLqiiWoouqKJJqKLjUUSGoouqKJDUUXCoouNRRIatRdUVL/2Q=='
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Ant_Man-Poster.jpg/250px-Ant_Man-Poster.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/4b/49/b6/4b49b66956c004409f5dfc323faf432f.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'data:image/jpeg;base64,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'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Monster_House_poster.jpg/220px-Monster_House_poster.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCUnFdg8ORIhnLqz0o05QIhCCkDE-ssw_oiuFzkt1sR0ng9JTc'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/en/thumb/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg/220px-The_SpongeBob_SquarePants_Movie_poster.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/en/d/d0/Bad_boys_two.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://image.tmdb.org/t/p/original/iwvyZBRD7qfDQ8ylRmf5NbLC5Oi.jpg'
                }
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Horror */}

        <View style={styles.filmList}>
          <Types txt="   Horror Films" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Paranormal_Activity_-_The_Marked_Ones_2014_poster.jpg/220px-Paranormal_Activity_-_The_Marked_Ones_2014_poster.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Conjuring_poster.jpg/220px-Conjuring_poster.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ab/30_Days_of_Night_teaser_poster.jpg/200px-30_Days_of_Night_teaser_poster.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://media.fstatic.com/-Y1YD6du5hxpDAcDCIoojE0A1wc=/fit-in/290x478/smart/media/movies/covers/2013/04/67bd9f83467f5a0a3b7a8085f6c84b24.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://m.media-amazon.com/images/M/MV5BYmFhMjlkOTctNWU2MC00YmQzLWJmYWMtZTUyNzM4YTU4ODRhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/73/4e/c5/734ec5489ca1c74e12ac5bf0ae76b5b2.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/a7/5a/79/a75a79a9fca59b051aef5e4687b708b7.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://thescoredesigns.files.wordpress.com/2013/08/notld90-rm-fronts.jpg?w=584'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://m.media-amazon.com/images/M/MV5BMjI0NTEyMjA3NV5BMl5BanBnXkFtZTgwODk5OTU4OTE@._V1_.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/8f/49/f5/8f49f5ee1d6bb5f461ed6a740f5c4d32.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/dc/22/54/dc2254335350ac980d86df13eaa4e631.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/d1/b8/55/d1b8557b35c5a34f405ce4e428f6ed0b.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ad/Saw_poster_promocional.jpg/200px-Saw_poster_promocional.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'data:image/jpeg;base64,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'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img2.acsta.net/pictures/14/06/24/13/52/528288.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://media-cache.cinematerial.com/p/500x/wc20cl7h/incarnate-french-dvd-movie-cover.jpg?v=1492096913'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'data:image/jpeg;base64,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'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/74/67/34/746734eabb6b6f939aabca7e90eaceda.jpg'
                }
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Anime */}

        <View style={styles.filmList}>
          <Types txt="   Anime" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://cdn.europosters.eu/image/750/posters/one-punch-man-saitama-i33907.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://images-na.ssl-images-amazon.com/images/I/71HYRubAuHL._AC_SY741_.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDpsrfnEStTNJm7jFLqe__UfDecxm6NtJD8dAm0FzCh60FYNUN'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://3.bp.blogspot.com/-XGAscE6-MmM/U-5FHbwoODI/AAAAAAAAAPM/FV4qcAQxvwU/s1600/capa.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/69/3b/59/693b59259aae6cdafdcea6139ebc72f0.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/d3/54/b2/d354b25a8066db5c638c169b37014c40.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://media.fstatic.com/qDFvb5m_fZFqPEnF5a3C0H6-t3w=/fit-in/290x478/smart/media/movies/covers/2011/08/cdc9fb3e200116147115fef76cd4139e.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://http2.mlstatic.com/-dvd-fate-stay-night-unlimited-blade-works-3-filmes-ova-D_NQ_NP_646271-MLB31348750188_072019-F.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://media.fstatic.com/Y6rKVT9YmF4s811GD0m90HI-vtY=/fit-in/290x478/smart/media/movies/covers/2015/07/god-eater_t117494.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzwTXVOs4skePFyuV8ZPq-0d7529w5iDvCYx7TVqa5Hnqmjy9U'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://img1.ak.crunchyroll.com/i/spire3/2e3d5e0f13da8c0eced54b573d883f0a1473358908_full.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://4.bp.blogspot.com/-MAsrMCRJT6o/V3rsBNZaXoI/AAAAAAAAAyc/QWo6zb6kK0Uf9KlJJbvHBqK6mZM1_G_iwCLcB/s1600/ajin_t194859_jpg_290x478_upscale_q90.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://www.otakupt.com/wp-content/uploads/2019/04/Retronime-%E2%80%93-Samurai-7-1.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://img.reelgood.com/content/show/7f87aa9f-7c2f-4af3-8380-435f6c2623b7/poster-780.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyLFGvIp6A8bBfCECVsXbobl7eYowo9FPEeqwJtYf2ipUpYvPS'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://viatorrents.com/capas/levius-download-torrent-2019-dublado-dual-audio-bluray-1080p-720p-4k-hd.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/54/e9/2f/54e92f1234628db99962f0cb311af750.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://img.reelgood.com/content/show/612c3d22-842f-46cb-8c03-29dc257e214f/poster-780.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://ib4.hulu.com/user/v3/artwork/2f68a2eb-6cd6-49cf-a1c3-43b570b991cc?base_image_bucket_name=image_manager&base_image=0a3f8333-d863-4951-8c6e-8abf6750bd7b&size=400x600&format=jpeg'
                }
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* My list */}

        <View style={styles.filmList}>
          <Types txt="   My List" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/50/7c/23/507c23ff361069cd26fc1014cab9bd22.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://br.web.img3.acsta.net/r_1280_720/pictures/18/08/07/00/17/4205927.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/70/00/35/700035ff9544e2aaa9dd45453a284e2d.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://i.pinimg.com/originals/df/ff/20/dfff20e129c2de83826b73253ab8d8d4.jpg'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Movies
                filmUri={
                  'https://m.media-amazon.com/images/M/MV5BMTQ2NTM1MjYzOV5BMl5BanBnXkFtZTgwNjQwMjA1MjE@._V1_UX182_CR0,0,182,268_AL_.jpg'
                }
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  main_star: {
    height: 506,
  },
  nav: {
    flexDirection: 'row',
    marginTop: -460,
  },
  filmList: {
    marginTop: -10,
    height: 230,
  },
  oriList: {
    marginTop: -10,
    height: 340,
  },
});
