import blogImage from '../../assets/blog.jpg';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl text-center font-extrabold mt-12 mb-8 w-2/3 mx-auto">
          Wedding Ceremony Blog
        </h2>
        <hr className="border w-2/3 mx-auto mb-2" />
        <p className="text-center text-lg font-medium w-2/3 mx-auto text-gray-400">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
        </p>
        <img className="w-2/3 mx-auto" src={blogImage} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
