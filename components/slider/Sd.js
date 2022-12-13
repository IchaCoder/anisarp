import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./settings";

export default function Sd() {
	return (
		<div className="bg-gradient-cc p-8 pt-4">
			<h2 fontWeight="800" textAlign="center" color="black" fontSize={"32px"}>
				Our users love us
			</h2>
			<div className="mx-auto max-w-[85%] mb-12">
				<Slider {...settings}>
					<div className="p-6 bg-white rounded m-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
							consequuntur accusantium, beatae amet blanditiis quisquam libero,
							magnam odit quibusdam mollitia maxime minus natus deleniti, harum
							nulla est non exercitationem ratione.
						</p>
					</div>
					<div className="p-6 bg-white rounded m-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
							consequuntur accusantium, beatae amet blanditiis quisquam libero,
							magnam odit quibusdam mollitia maxime minus natus deleniti, harum
							nulla est non exercitationem ratione.
						</p>
					</div>
					<div className="p-6 bg-white rounded m-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
							consequuntur accusantium, beatae amet blanditiis quisquam libero,
							magnam odit quibusdam mollitia maxime minus natus deleniti, harum
							nulla est non exercitationem ratione.
						</p>
					</div>
				</Slider>
			</div>
		</div>
	);
}
