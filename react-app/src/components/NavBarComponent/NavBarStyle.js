import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray, $Blue } from "../../style/variabelsColor";

export default StyleSheet.create({
  navBar: {
    top: 0,
    backgroundColor: '#fff',
    width: '100%'
  },
  navBarWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    textAlign: 'center',
    borderBottom: `1px solid ${$lightGray}`,
    padding: 20
  },
  img: {
    maxWidth: 100
  },
  link: {
    color: '#333',
    borderTop: '2px solid transparent',
    padding: '0 20px',
    height: 58,
    display: 'flex',
    alignItems: 'center',
    ':hover': {
      borderColor: $Blue,
      transition: '300ms'
    }
  },
  links: {
    display: 'flex',
    alignItems: 'center'
  }
})