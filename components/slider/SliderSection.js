import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./settings";
import Image from "next/image";

export default function SliderSection() {
	return (
		<div className="mt-20  bg-gray-200">
			<Slider className=" mx-auto p-4" {...settings}>
				<div>
					<div className="m-4 shadow-xl rounded bg-white">
						<Image
							src="https://www.pexels.com/photo/white-concrete-building-under-sunny-blue-sky-87223/"
							alt="planning"
							width="400"
							height="500"
							className="w-[500px] h-[230px]"
						/>
						<h3 className="font-semibold text-center p-4">
							Consultancy Service
						</h3>
					</div>
				</div>
				<div>
					<div className="m-4 shadow-xl rounded">
						<Image
							src="/hero_img.jpeg"
							alt="planning"
							width="400"
							height="500"
							className="w-[500px] h-[230px]"
						/>
						<h3 className="font-semibold text-center p-4">
							Consultancy Service
						</h3>
					</div>
				</div>
				<div>
					<div className="m-4 shadow-xl rounded">
						<Image
							src="/hero_img.jpeg"
							alt="planning"
							width="400"
							height="500"
							className="w-[500px] h-[230px]"
						/>
						<h3 className="font-semibold text-center p-4">
							Consultancy Service
						</h3>
					</div>
				</div>
				<div>
					<div className="m-4 shadow-xl rounded">
						<Image
							src="/hero_img.jpeg"
							alt="planning"
							width="400"
							height="500"
							className="w-[500px] h-[230px]"
						/>
						<h3 className="font-semibold text-center p-4">
							Consultancy Service
						</h3>
					</div>
				</div>
			</Slider>
		</div>
	);
}
