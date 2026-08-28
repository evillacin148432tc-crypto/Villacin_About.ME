import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  image
} from 'react-native';

export default function App() {
  const [page, setPage] = useState('home');
  const { width, height } = useWindowDimensions();
  const compact = width < 360;
  const scale = Math.min(Math.max(Math.min(width / 315, height / 628), 1), 1.35);

  const goTo = (nextPage) => setPage(nextPage);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.phone, { width, height }]}> 
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Header page={page} goTo={goTo} />

          {page === 'home' ? (
            <HomePage compact={compact} scale={scale} goTo={goTo} />
          ) : (
            <AboutPage compact={compact} scale={scale} goTo={goTo} />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function Header({ page, goTo }) {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => goTo('home')}
        style={[styles.navButton, page === 'home' && styles.activeNav]}
      >
        <Text style={styles.homeIcon}>⌂</Text>
        <Text style={styles.navText}>HOME</Text>
      </Pressable>

      <Pressable
        onPress={() => goTo('about')}
        style={[styles.navButton, page === 'about' && styles.activeNav]}
      >
        <Text style={styles.personIcon}>♙</Text>
        <Text style={styles.navText}>ABOUT ME</Text>
      </Pressable>
    </View>
  );
}

function HomePage({ compact, scale, goTo }) {
  return (
    <View style={styles.page}>
      <Decorations />

      <View style={styles.profileArea}>
        <View style={[styles.blob, styles.blobYellow]} />
        <View style={[styles.blob, styles.blobGreen]} />
        <View style={[styles.blob, styles.blobYellowSmall]} />
        <View style={[styles.profileRing, { width: compact ? 110 : 120, height: compact ? 110 : 120 }]}> 
          <Image source={require('./assets/profile.jpg')} style={styles.profileImage} />
        </View>
      </View>

      <View style={[styles.intro, compact && styles.compactIntro]}>
        <Text style={[styles.hello, { fontSize: 17 * scale }]}>Hello there! ♡</Text>
        <Text style={[styles.name, { fontSize: 16 * scale }]}>I’m Edezon Villacin</Text>
        <Text style={[styles.smallIntro, { width: 160 * scale, fontSize: 6.8 * scale, lineHeight: 8 * scale }]}>
          I’m a BSIT student of UM Tagum and love creating digital designs.
        </Text>
      </View>

      <View style={styles.homeAboutSection}>
        <View style={styles.aboutTitleWrap}>
          <Text style={[styles.aboutTitle, { fontSize: 14 * scale }]}>ABOUT ME!</Text>
        </View>
        <View style={[styles.aboutCard, { padding: 15 * scale }]}>
          <Text style={[styles.aboutText, { fontSize: 11.5 * scale, lineHeight: 12.3 * scale }]}>
            I’m a creative person who loves making Pobmat and T-shirt designs. I enjoy expressing my ideas through design and capturing moments through photography. I also love staying active through running, going to the gym, and hiking. In my free time, I enjoy cooking, gaming, and going on solo trips to explore new places and experience new things. I’m always looking for inspiration, learning new skills, and finding ways to grow both creatively and personally.
          </Text>
        </View>
      </View>

      <Pressable
        style={[styles.aboutButton, compact && styles.compactAboutButton]}
        onPress={() => goTo('about')}
      >
        <Text style={styles.aboutButtonText}>SEE MORE!</Text>
        <Text style={styles.locationIcon}>⌖</Text>
      </Pressable>

      <View style={styles.homeBottomDecoration} />
    </View>
  );
}

function AboutPage({ compact, scale, goTo }) {
  return (
    <View style={styles.page}>
      <Decorations />

{/* ================= SKILLS ================= */}

<View style={styles.skillsSection}>

  <View style={styles.skillsTitle}>
    <Text style={styles.skillsTitleText}>
      SKILLS!
    </Text>
  </View>

  <View style={styles.skillsCard}>

    <Text style={styles.skillsDescription}>
      My Software I use in Digital design.
    </Text>

    <View style={styles.skillsImages}>

      <Image
        source={require('./assets/canva.png')}
        style={styles.softwareImage}
      />

      <Image
        source={require('./assets/photoshop.png')}
        style={styles.softwareImage}
      />

    </View>

  </View>

</View>


{/* ================= SELECTED WORK ================= */}

<View style={styles.selectedWorkSection}>

  <View style={styles.selectedWorkTitle}>
    <Text style={styles.selectedWorkTitleText}>
      SELECTED WORK
    </Text>
  </View>

  <View style={styles.selectedWorkCard}>

    <Image
      source={require('./assets/work1.jpg')}
      style={styles.workImage}
    />

    <Image
      source={require('./assets/work2.jpg')}
      style={styles.workImage}
    />

  </View>

</View>

  <View style={styles.divider} />

<View style={styles.contactSection}>

  <View style={styles.contactHeadingRow}>
    <View style={styles.contactCircle}>
      <Text style={styles.contactPerson}>👤</Text>
    </View>

    <Text style={[styles.contactTitle, { fontSize: 11 * scale }]}>
      CONTACT
    </Text>
  </View>

  <ContactRow icon="✆" text="09691584536" />
  <ContactRow icon="✉" text="villanedezon@gmail.com" />
  <ContactRow icon="f" text="Edezon Ampo Villacin" />
  <ContactRow icon="G" text="evillacin148342tc-crypto" />

</View>


<Pressable
  style={styles.backHomeButton}
  onPress={() => goTo('home')}
>
  <Text style={styles.backHomeButtonText}>
    BACK TO HOME
  </Text>
</Pressable>

      <View style={styles.aboutFooterDecoration} />
    </View>
  );
}

function ContactRow({ icon, text }) {
  return (
    <View style={styles.contactRow}>
      <View style={styles.contactIconCircle}>
        <Text style={styles.contactIcon}>{icon}</Text>
      </View>
      <Text style={styles.contactText}>{text}</Text>
    </View>
  );
}

function Decorations() {
  return (
    <>
      <View style={styles.greenTopRight} />
      <View style={styles.yellowRight} />
      <View style={styles.greenBottomLeft} />
      <View style={styles.yellowBottomLeft} />
      <View style={styles.stripeBlack} />
      <View style={styles.stripeGreen} />
      <View style={styles.stripeYellow} />
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 0,
    overflow: 'hidden',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    height: 24,
    marginTop: 56,
    backgroundColor: '#246b2b',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    zIndex: 20,
  },
  navButton: {
    height: 22,
    minWidth: 94,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
  },
  activeNav: {
    backgroundColor: '#ffe642',
  },
  navText: {
    color: '#050505',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.2,
  },
  homeIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    marginRight: 3,
  },
  personIcon: {
    color: '#111',
    fontSize: 16,
    marginRight: 3,
  },
  page: {
    minHeight: 650,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 18,
  },
  profileArea: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 5,
  },
  profileRing: {
    borderRadius: 100,
    padding: 4,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#d7d7d7',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  blob: {
    position: 'absolute',
    borderRadius: 100,
  },
  blobYellow: {
    width: 68,
    height: 68,
    backgroundColor: '#ffe642',
    top: 26,
    left: 78,
  },
  blobGreen: {
    width: 62,
    height: 62,
    backgroundColor: '#246b2b',
    top: 62,
    right: 76,
  },
  blobYellowSmall: {
    width: 52,
    height: 52,
    backgroundColor: '#ffe642',
    bottom: 10,
    left: 90,
  },
  intro: {
    paddingHorizontal: 42,
    marginTop: 6,
    zIndex: 5,
  },
  compactIntro: {
    paddingHorizontal: 20,
  },
  homeAboutSection: {
    marginTop: 28,
    zIndex: 5,
  },
  hello: {
    fontFamily: 'monospace',
    fontSize: 17,
    color: '#222',
  },
  name: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#222',
    marginTop: 2,
  },
  role: {
    alignSelf: 'flex-start',
    marginTop: 4,
    backgroundColor: '#246b2b',
    color: '#fff',
    fontSize: 6,
    fontWeight: '900',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  smallIntro: {
    width: 160,
    fontFamily: 'monospace',
    fontSize: 6.8,
    lineHeight: 8,
    color: '#333',
    marginTop: 3,
  },
  aboutButton: {
    alignSelf: 'center',
    marginTop: 24,
    backgroundColor: '#ddd',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 8,
  },
  compactAboutButton: {
    marginTop: 24,
  },
  aboutButtonText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111',
  },
  locationIcon: {
    fontSize: 31,
    position: 'absolute',
    right: -15,
    top: -30,
    color: '#222',
  },
  aboutTitleWrap: {
    alignSelf: 'flex-start',
    backgroundColor: '#aaa',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 2,
    marginTop: 12,
    zIndex: 5,
  },
  aboutTitle: {
    fontSize: 14,
    color: '#222',
  },
  aboutCard: {
    width: '86%',
    alignSelf: 'center',
    backgroundColor: '#d7d7d7',
    borderRadius: 12,
    padding: 15,
    marginTop: -2,
    zIndex: 5,
  },
  aboutText: {
    fontFamily: 'serif',
    fontSize: 11.5,
    lineHeight: 12.3,
    color: '#222',
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginTop: 100,
    marginHorizontal: 0,
    zIndex: 5,
  },
  contactSection: {
    paddingHorizontal: 14,
    paddingTop: 12,
    marginTop: 0,
    zIndex: 5,
  },
  contactHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  contactCircle: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
  },
  contactPerson: {
    color: '#fff',
    fontSize: 17,
  },
  contactTitle: {
    fontSize: 11,
    color: '#333',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 29,
    marginBottom: 7,
  },
  contactIconCircle: {
    width: 21,
    height: 21,
    borderRadius: 12,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },
  contactIcon: {
    color: '#222',
    fontSize: 13,
    fontWeight: '900',
  },
  contactText: {
    fontSize: 13,
    color: '#222',
    flexShrink: 1,
  },
  backHomeButton: {
    alignSelf: 'center',
    backgroundColor: '#ffe642',
    borderRadius: 16,
    marginTop: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backHomeButtonText: {
    color: '#111',
    fontSize: 13,
    fontWeight: '900',
  },
  greenTopRight: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#246b2b',
    right: -29,
    top: 21,
  },
  yellowRight: {
    position: 'absolute',
    width: 86,
    height: 86,
    borderRadius: 86,
    backgroundColor: '#ffe642',
    right: -42,
    top: 185,
  },
  greenBottomLeft: {
    position: 'absolute',
    width: 112,
    height: 112,
    borderRadius: 112,
    backgroundColor: '#246b2b',
    left: -42,
    bottom: 90,
  },
  yellowBottomLeft: {
    position: 'absolute',
    width: 92,
    height: 92,
    borderRadius: 92,
    backgroundColor: '#ffe642',
    left: 16,
    bottom: -42,
  },
  stripeBlack: {
    position: 'absolute',
    width: 150,
    height: 23,
    backgroundColor: '#111',
    transform: [{ rotate: '-25deg' }],
    left: -52,
    top: 138,
    borderRadius: 12,
  },
  stripeGreen: {
    position: 'absolute',
    width: 150,
    height: 23,
    backgroundColor: '#246b2b',
    transform: [{ rotate: '-25deg' }],
    left: -45,
    top: 156,
    borderRadius: 12,
  },
  stripeYellow: {
    position: 'absolute',
    width: 150,
    height: 18,
    backgroundColor: '#ffe642',
    transform: [{ rotate: '-25deg' }],
    left: -40,
    top: 124,
    borderRadius: 12,
  },
  homeBottomDecoration: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: '#ffe642',
    right: -25,
    bottom: -15,
  },
  aboutFooterDecoration: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: '#246b2b',
    right: -30,
    bottom: -48,
  },
  skillsSection: {
    marginTop: 15,
  zIndex: 5,
},

skillsTitle: {
  alignSelf: 'flex-start',
  backgroundColor: '#ff8a3d',
  borderRadius: 30,
  paddingHorizontal: 10,
  paddingVertical: 6,
  marginLeft: -12,
  zIndex: 10,
},

skillsTitleText: {
  fontFamily: 'serif',
  fontSize: 16,
  fontWeight: '500',
  color: '#111',
},

skillsCard: {
  width: '90%',
  alignSelf: 'center',
  backgroundColor: '#d7d7d7',
  borderRadius: 16,
  minHeight: 155,
  marginTop: -1,
  paddingHorizontal: 10,
  paddingVertical: 12,
},

skillsDescription: {
  fontFamily: 'serif',
  fontSize: 17,
  color: '#666',
  textAlign: 'center',
  marginBottom: 8,
},

skillsImages: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 28,
},

softwareImage: {
  width: 100,
  height: 95,
  resizeMode: 'contain',
},


/* SELECTED WORK */

selectedWorkSection: {
  marginTop: 15,
  zIndex: 5,
},

selectedWorkTitle: {
  alignSelf: 'flex-end',
  backgroundColor: '#ff8a3d',
  borderRadius: 30,
  paddingHorizontal: 12,
  paddingVertical: 7,
  marginRight: -12,
  zIndex: 10,
},

selectedWorkTitleText: {
  fontFamily: 'serif',
  fontSize: 16,
  fontWeight: '700',
  color: '#111',
},

selectedWorkCard: {
  width: '90%',
  alignSelf: 'center',
  backgroundColor: '#d7d7d7',
  borderRadius: 16,
  padding: 14,
  marginTop: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
},

workImage: {
  width: '48%',
  height: 135,
  resizeMode: 'cover',
  borderRadius: 3,
},
});
