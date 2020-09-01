import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://images.robertharding.com/preview/RM/RH/VERTICAL/632-4604.jpg"
				profileSrc="https://avatars.dicebear.com/api/human/6.svg"
				title="The Wey"
			/>
			<Story
				image="https://i.pinimg.com/236x/51/28/80/5128808d15e6c8735abacf98f81d0c8b--mexico-travel-cancun-mexico.jpg"
				profileSrc="https://avatars.dicebear.com/api/human/156.svg"
				title="The Wey"
			/>
			<Story
				image="https://images.robertharding.com/preview/RM/RH/VERTICAL/367-794.jpg"
				profileSrc="https://avatars.dicebear.com/api/human/679.svg"
				title="The Wey"
			/>
			<Story
				image="https://41.media.tumblr.com/d318ae336ab85c9d379970358dde54c1/tumblr_miswbwL3Kc1ruuajdo1_500.jpg"
				profileSrc="https://avatars.dicebear.com/api/human/61.svg"
				title="The Wey"
			/>
			<Story
				image="https://images.robertharding.com/preview/RM/RH/VERTICAL/777-277.jpg"
				profileSrc="https://avatars.dicebear.com/api/human/10.svg"
				title="The Wey"
			/>
		</div>
	);
}

export default StoryReel;
