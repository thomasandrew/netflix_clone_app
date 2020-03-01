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
import Play from './components/Play';
import Movies from './components/Movies';
import Types from './components/Types';
import Watching from './components/Watching';
import Box from './components/Box';
import Watched from './components/Watched';
import Trailers from './components/Trailers';
import Original from './components/Original';

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
                  'https://img.reelgood.com/content/show/465d826b-8267-4b49-bf57-3dc37bdc7440/poster-780.jpg'
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
                  'https://m.media-amazon.com/images/M/MV5BMjE1NDMxMjI0OV5BMl5BanBnXkFtZTcwMjQyMDExOQ@@._V1_.jpg'
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
              <Original oriUri="https://lh3.googleusercontent.com/proxy/6rfs8hcx1hwnCfqHjya3AsFc1yi0gMujlE8RLGICOGyWSd5QgyTNjCs7TWdwfmRKl8qsjVNuyqtGYgTHppX1YLhQ_xIQvAqsCYKz60DBO9F8HrpBtANMAXBhKG9SWnAohZHJYSo" />
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
          <Types txt="   Watche it Again" />
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
                  'https://img.reelgood.com/content/show/465d826b-8267-4b49-bf57-3dc37bdc7440/poster-780.jpg'
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
