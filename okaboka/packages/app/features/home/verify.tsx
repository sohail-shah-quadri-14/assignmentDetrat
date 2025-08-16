import React from "react";
import { YStack, XStack, Input, Button, Text, Image } from "tamagui";
import {router } from "expo-router";
const VerifyScreen = () => {
  return (
    <YStack
      flex={1}
      bg="#3EC4A4"
      alignItems="center"
      justifyContent="center"
      p="$4"
      space
    >
      {/* Logo */}
      <Image
        source={require("../../assests/logo.png")} // replace with your logo path
        width={160}
        height={160}
        resizeMode="contain"
        marginBottom="$6"
      />

      {/* Title + Subtitle */}
      <Text fontSize={20} fontWeight="700" color="black" marginBottom="$2">
        Verify your number
      </Text>
      <Text fontSize={14} color="black" marginBottom="$5" textAlign="center">
        We’ve sent a code to your phone
      </Text>

      {/* OTP Boxes */}
      <XStack gap="$3" marginBottom="$6">
        <Input
          borderWidth={1}
          borderColor="gray"
          borderRadius="$4"
          bg="white"
          height={60}
          width={50}
          textAlign="center"
          fontSize={20}
          maxLength={1}
        />
        <Input
          borderWidth={1}
          borderColor="gray"
          borderRadius="$4"
          bg="white"
          height={60}
          width={50}
          textAlign="center"
          fontSize={20}
          maxLength={1}
        />
        <Input
          borderWidth={1}
          borderColor="gray"
          borderRadius="$4"
          bg="white"
          height={60}
          width={50}
          textAlign="center"
          fontSize={20}
          maxLength={1}
        />
        <Input
          borderWidth={1}
          borderColor="gray"
          borderRadius="$4"
          bg="white"
          height={60}
          width={50}
          textAlign="center"
          fontSize={20}
          maxLength={1}
        />
      </XStack>

      {/* Verify Button */}
      <Button
        bg="black"
        borderRadius="$4"
        height={48}
        width="80%"
        marginBottom="$4"
        onPress={() => console.log("Verify pressed") /* Handle verification logic */  } 
      >
        <Text color="white" fontWeight="700">
          Verify
        </Text>
      </Button>
      <Button
        bg="black"
        borderRadius="$4"
        height={48}
        width="80%"
        marginBottom="$4"
        onPress={() => console.log("Skip pressed")  }
      >
        <Text color="white" fontWeight="700">
          Skip
        </Text>
      </Button>


      {/* Resend Section */}
      <Text fontSize={14} color="black">
        Didn’t receive code?{" "}
        <Text fontWeight="700" color="black">
          Resend
        </Text>
      </Text>
      <Text fontSize={12} color="black" marginTop="$2">
        You can request a new code in 4 seconds
      </Text>
    </YStack>
  );
};

export default VerifyScreen;
