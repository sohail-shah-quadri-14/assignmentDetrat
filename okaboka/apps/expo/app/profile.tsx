import { router } from "expo-router";
import React from "react";
import { YStack, XStack, Input, Button, Text, Image } from "tamagui";

const NameScreen = () => {
  return (
    <YStack
      flex={1}
      bg="#36C1A1"
      alignItems="center"
      justifyContent="center"
      p="$6"
      space="$6"
    >
      {/* Profile Image */}
      <Image
        source={{
          uri: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162179.jpg", // replace with your image
        }}
        width={120}
        height={120}
        borderRadius={60}
        mb="$4"
      />

      {/* Heading */}
      <Text
        fontSize={20}
        fontWeight="700"
        color="black"
        textAlign="center"
        mb="$4"
      >
        What should we call you?
      </Text>

      {/* Full Name Input */}
      <YStack width="100%" maxWidth={320} space="$2">
        <Text fontWeight="600" fontSize={14} color="black">
          Full Name
        </Text>
        <Input
          placeholder="Your Name"
          borderRadius={12}
          height={48}
          fontSize={16}
          bg="white"
          color="black"
        />
      </YStack>

      {/* Button */}
      <Button
        width="100%"
        maxWidth={320}
        height={48}
        bg="black"
        borderRadius={12}
        mt="$4"
        onPress={() => router.push("/detail")}
      >
        <Text color="white" fontWeight="600">
          Lets Get To Know You
        </Text>
      </Button>

      {/* Footer Text */}
      <Text fontSize={12} color="black" mt="$2">
        Your safety is our priority
      </Text>
    </YStack>
  );
};

export default NameScreen;
