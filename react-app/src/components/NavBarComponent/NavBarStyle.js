import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray, $Blue} from "../../style/variabelsColor";

export default StyleSheet.create({
  navBar: {
    top: 0,
    backgroundColor: '#fff',
    width: '100%',
    boxShadow: '0 0 5px 1px grey'
  },
  navBarWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  img: {
    textAlign: 'center',
    borderBottom: `1px solid ${$lightGray}`
  },
  link: {
    color: '#333',
    borderTop: '2px solid transparent',
    padding: '0 20px',
    ':hover': {
      borderColor: $Blue,
      transition: '300ms'
    }
  }
})