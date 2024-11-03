import React, { useEffect } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import { useTheme } from '~Contexts/ThemeContext';
import { useStyles } from './VideoComponent.styles';

interface VideoComponentProps {
  videoUri: string; // Path of the local video
  title: string; // Title to display above the video
  onVideoEnd: () => void; // Callback to handle when the video ends
  shouldPlay: boolean; // Whether the video should autoplay
}

export const VideoComponent: React.FC<VideoComponentProps> = ({
  videoUri,
  title,
  onVideoEnd,
  shouldPlay,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  // Use an effect to access shared values instead of accessing them directly in render
  useEffect(() => {
    // Here, you can access shared values or perform actions based on them
  }, [shouldPlay]); // Add dependencies as needed

  return (
    <View style={styles.container}>
        <Video
          source={{ uri: videoUri }} // Pass the URI directly as an object
          style={styles.video}
          controls={false} // Hide video controls
          paused={!shouldPlay} // Autoplay or pause the video based on the current slide
          resizeMode="cover" // Maintain aspect ratio
          onEnd={onVideoEnd} // Call the onVideoEnd callback when the video ends
          repeat={true} // Do not repeat the video
        />
    </View>
  );
};
