import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';

const ProfilePage = () => {
  const [userName, setUserName] = useState('Jane Aint real');
  const [email, setEmail] = useState('jane.aintreal@hotmail.com');
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../images/face.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.email}>{email}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Successfully logged out!')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
  },
  section: {
    width: '90%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#FC55BE',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfilePage;
