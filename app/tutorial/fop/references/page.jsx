import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function FopRef() {
    return(
        <div>
            <h2 className="fw-bold">
                <i className="bi bi-link-45deg"></i> References
            </h2>
            <hr/>

            <ul>
                <li>
                    <Link href="https://www.w3schools.com/js/" target="_blank">
                        https://www.w3schools.com/js/
                    </Link>
                </li>
                <li>
                    <Link href="https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/"
                    target="_blank">
                        https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
                    </Link>
                </li>
                <li>
                    <Link href="https://javascript.info/reference-type" 
                    target="_blank">
                        https://javascript.info/reference-type
                    </Link>
                </li>
            </ul>

            {/* <!-- <h2 className="fw-bold mt-5">
                <i className="bi bi-bookmark-star-fill"></i> Credits
            </h2>
            <ul className="list-group">
                <li className="list-group-item text-center">
                    <h3>MassDebateKingVonII</h3>
                    <div className="container w-75 mx-auto">
                        <div className="row gx-2">
                            <div className="col-4">
                                <a href="https://github.com/MassDebateKingVonII" 
                                target="a_blank" 
                                className="text-decoration-none text-black w-100">
                                    <img src="/assets/images/icons/github.png" className="img-fluid">
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="https://discordapp.com/users/1181181203768950834" 
                                target="a_blank"
                                className="text-decoration-none text-black w-100">
                                    <img src="/assets/images/icons/discord.png" className="img-fluid">
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="https://www.reddit.com/user/Desperate_Cancel9312/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" 
                                target="a_blank"
                                className="text-decoration-none text-black w-100">
                                    <img src="/assets/images/icons/reddit.png" className="img-fluid">
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul> --> */}
        </div>
    );

}
