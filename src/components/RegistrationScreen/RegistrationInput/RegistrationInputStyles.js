import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  inputWrapper: keyboardStatus => ({
    width: '100%',
    marginBottom: keyboardStatus === 'hidden' ? 27 : 16,
  }),
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
    width: '100%',
    height: 50,
  },

  input: {
    position: 'relative',
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    borderRadius: 8,

    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  inputPass: {
    position: 'relative',
    height: '100%',
    paddingLeft: 16,
    paddingRight: 110,
    paddingVertical: 15,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    borderRadius: 8,

    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  inputButtonPass: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    height: 20,
    marginVertical: 15,
    marginRight: 16,
  },
  inputButtonPassText: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    color: '#1B4371',
  },
});
