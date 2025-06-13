import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact us!</Text>
      <Text style={styles.intro}>
        We would love to answer any questions you have, and are open to receiving feedback!
        Let your voice be heard, it matters!
      </Text>

      <View style={styles.section}>
        <Text style={styles.heading2}>Mail us</Text>
        <Text style={styles.text}>
          You can use our mail to let your voice be heard. Give us your opinion or ask any question!
        </Text>
        <Text style={styles.email}>Hatice.thisdoesntwork@hotmail.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading2}>Leave your feedback here</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Your name"
        />

        <Text style={styles.label}>Feedback</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={feedback}
          onChangeText={setFeedback}
          placeholder="Your feedback"
          multiline
        />

        <Text style={styles.label}>E-mail (optional)</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Your email"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Other Ways to Contact */}
      <View style={styles.section}>
        <Text style={styles.heading2}>Other ways to contact us</Text>
        <Text style={styles.text}>
          You can also give us a call! Our office is open during work hours (Monday–Friday from 9–5).
          Our workers would love to have a chat with you about our business!
        </Text>
        <Text style={styles.phone}>+32412345678</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  intro: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  email: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  label: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FC55BE',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  phone: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ContactScreen;
