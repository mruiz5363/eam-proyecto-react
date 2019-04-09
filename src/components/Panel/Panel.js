import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='browse'
        >
          <Link className="Letras" to='posts'>
            Posts
        </Link>
        </Menu.Item>


        <Menu.Item
          name='help'
        >
        <Link className="Letras" to='Albums'>
        Albums
        </Link>
          </Menu.Item>
      </Menu>
    )
  }
}
