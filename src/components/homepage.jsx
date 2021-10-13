import './homepageStyles.css'
import { Link } from "react-router-dom";

const Homepage = () => {
    return <div className='welcomePage'>
            <h1 className='welcomeTitle'>Benvingut!</h1>
            <p className='paragraf'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem enim, dictum et maximus id, mollis aliquam purus. Phasellus commodo viverra nisl sit amet rutrum. Aenean cursus malesuada mi, ut consectetur diam pharetra nec. Maecenas quis velit mi. Maecenas ultricies nibh ac tempor varius. Fusce augue quam, fringilla ut rhoncus sit amet, congue ut odio. Cras vel orci id purus fringilla placerat a non lacus. Integer ac mi eget nisl semper posuere vitae id neque. Praesent finibus mollis auctor. Vivamus condimentum consectetur accumsan. Vestibulum in consectetur erat. Ut eget convallis libero. Nam feugiat dui at ligula bibendum, vitae porttitor lacus rhoncus.
            </p>
            <p className='paragraf'>
                Cras luctus, augue sit amet mattis posuere, mauris dolor mollis nisi, eget porttitor libero mi vehicula arcu. Suspendisse sit amet risus sollicitudin, pulvinar metus at, faucibus erat. Sed eleifend tincidunt velit ut eleifend. Ut rutrum, turpis ut molestie dignissim, ex velit sodales lorem, in porta justo augue at ligula. Nulla ac ipsum leo. Phasellus lobortis elementum finibus. Praesent at condimentum odio. Nam rutrum metus magna. Praesent aliquet metus dui.
            </p>
            <p className='paragraf'> 
                Donec tempus rutrum turpis sit amet pellentesque. Curabitur non dignissim est. Nullam aliquam ipsum ut vehicula venenatis. Vestibulum erat turpis, volutpat at sollicitudin et, ultrices eget diam. Sed justo leo, fermentum in enim ut, maximus tincidunt diam. Integer placerat magna ut orci dapibus faucibus. Fusce convallis purus vitae lectus pharetra, et rutrum nibh maximus. Nunc accumsan purus ac urna viverra, sed euismod enim feugiat. Ut sed accumsan orci. Maecenas auctor placerat arcu ac placerat. Quisque eu tristique lectus.
            </p>
                <Link to='/main'>
                        <button className='appButton'>
                            Pressupost
                        </button>
                </Link>
                </div>
}

export default Homepage;