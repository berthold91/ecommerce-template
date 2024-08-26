import Footer from '../../components/Footer/Footer.js';
import Header from '../../components/Header/Header.js'
const HomePage = {
    render: () => {
        return ( `
        ${ Header.render() }
        <h1> this is the Home Page </h2>
        ${ Footer.render() }
        `);
    }
}
export default HomePage;