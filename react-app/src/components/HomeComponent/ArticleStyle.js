import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0'
  },
  title: {
    margin: 0
  },
  img: {
    width: '100%',
    maxWidth: 500,
    float: 'left',
    marginRight: 20
  },
  text: {
    fontSize: 18,
    lineHeight: 1.6,
    textAlign: 'justify',
    margin: 0
  }
})