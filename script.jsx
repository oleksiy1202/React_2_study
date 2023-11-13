// const productValue = {
//     title: "Iphone list",
//     items: [
//         "Iphone 1",
//         "Iphone 2",
//         "Iphone 3",
//         "Iphone 4",
//         "Iphone 5",
//         "Iphone 6",
//         "Iphone 7",
//         "Iphone 8",
//         "Iphone 9",
//         "Iphone 10",
//         "Iphone 11",
//         "Iphone 12",
//         "Iphone 13",
//         "Iphone 14",
//         "Iphone 15",
//         "Iphone 16",
//     ]
// }

// class Item extends React.Component {

//     render() {
//         return <li>{this.props.name}</li>
//     }
// }

// class ItemList extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             items: this.props.data.items
//         }
//         this.filterList = this.filterList.bind(this)
//     }

//     filterList(e) {
//         let filteredList = this.props.data.items.filter(function (item) {
//             return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1
//         })
//         console.log(filteredList);
//         this.setState({
//             items: filteredList
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.props.data.title}</h2>
//                 <input type="text" placeholder="Пошук" onInput={this.filterList} />
//                 <ul>
//                     {
//                         this.state.items.map(function (item) {
//                             return <Item name={item} key={item} />
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <ItemList data={productValue} />,
//     document.getElementById('root')
// )




const URL = 'http://localhost:3000/items'

class ItemList extends React.Component {

    render() {
        return (
            <ul>
                <li>Test</li>
            </ul>
        )
    }
}
ReactDOM.render(
    <ItemList />,
    document.getElementById('root')
)