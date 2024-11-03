import React, { useState, useRef, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { VideoComponent } from './Components'; // Import your VideoComponent
import { useStyles } from './VideoCarousel.styles'; // Import your styles

const { width: screenWidth } = Dimensions.get('window');

interface VideoItem {
  uri: string; // Path of the local video
  title: string; // Title for the video
}

interface VideoCarouselProps {
  videos: VideoItem[]; // Array of video items
}

export const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const styles = useStyles(); // Get styles from the hook
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current video index
  const carouselRef = useRef<any>(null); // Ref for the Carousel to programmatically change slide
  const [isPlaying, setIsPlaying] = useState(false); // Controls video playback

  const handleVideoEnd = () => {
    // Move to the next video in the sequence
    const nextIndex = (currentIndex + 1) % videos.length;

    // Trigger the carousel to snap to the next index
    carouselRef.current?.scrollTo({ index: nextIndex, animated: true });
    setIsPlaying(false); // Pause the video for transition

    setTimeout(() => {
      setCurrentIndex(nextIndex); // Update the current index
      setIsPlaying(true); // Start playing the next video
    }, 500); // Match this delay with your carousel animation duration
  };

  useEffect(() => {
    setIsPlaying(true); // Start playing the video when the slide changes
  }, [currentIndex]);

  const renderItem = ({ item, index }: { item: VideoItem; index: number }) => (
    <View style={{ marginHorizontal: 10 }}> {/* Add margin for spacing between items */}
      <VideoComponent
        videoUri={item.uri}
        title={item.title}
        onVideoEnd={handleVideoEnd} // Triggered when the video ends
        shouldPlay={index === currentIndex && isPlaying} // Play only the current video
      />
    </View>
  );

  // Adjust the dimensions for a smaller carousel
  const carouselHeight = screenWidth * 0.35; // Set height to 60% of screen width
  const carouselWidth = screenWidth * 0.85; // Set width to 85% of screen width

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Carousel
        ref={carouselRef} // Reference for programmatic control
        loop={true} // No infinite loop; we'll handle looping manually
        data={videos}
        renderItem={renderItem}
        width={carouselWidth} // Carousel width
        height={carouselHeight} // Adjust height to make it smaller
        style={{ overflow: 'visible' }} // Avoid clipping of items
        pagingEnabled // Enable snapping to item
        scrollAnimationDuration={500} // Smooth scrolling animation
        mode="parallax" // Add parallax effect to transitions
        modeConfig={{
          parallaxScrollingScale: 0.9, // Scale down adjacent items
          parallaxScrollingOffset: 50, // Offset for the parallax effect
        }}
        onSnapToItem={(index) => {
          setIsPlaying(false); // Pause current video when changing slides
          setCurrentIndex(index); // Set the new current index
          setTimeout(() => setIsPlaying(true), 500); // Play the new video after a short delay
        }}
        defaultIndex={currentIndex} // Start at the current index
      />
    </View>
  );
};
