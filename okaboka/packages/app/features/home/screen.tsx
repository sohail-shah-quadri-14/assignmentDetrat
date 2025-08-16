import { router } from "expo-router";
import React, { useState } from "react";
import { YStack, Input, Button, Text, Image } from "tamagui";

const WelcomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <YStack
      flex={1}
      backgroundColor="#3EC4A4"
      alignItems="center"
      justifyContent="center"
      padding="$4"
      space="$4"
    >
      {/* Title */}
      <Text fontSize={24} fontWeight="700" color="black">
        Welcome to okaBoka
      </Text>
      <Text fontSize={14} color="black">
        Connect with emotionally similar people
      </Text>

      {/* Logo */}
      <Image
        source={require("../../assests/logo.png")}
        width={160}
        height={160}
        resizeMode="contain"
      />

      <Text
        fontSize={14}
        color="black"
        textAlign="center"
        paddingHorizontal="$3"
      >
        Let’s start with your number your world begins here.
      </Text>

      {/* Input */}
      <YStack width="100%" space="$3" marginTop="$4">
        <Text fontWeight="600" color="black">
          Phone Number
        </Text>
        <Input
          placeholder="Enter your phone number"
          borderWidth={1}
          borderColor="gray"
          borderRadius="$4"
          backgroundColor="white"
          height={48}
          paddingHorizontal="$3"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
        />
      </YStack>

      {/* OR separator */}
      <Text color="black" marginTop="$3">
        or
      </Text>

      {/* Continue with WhatsApp */}
      <Button
        backgroundColor="white"
        borderRadius="$4"
        height={48}
        width="100%"
      >
        <Text color="black">Continue With Whatsapp</Text>
      </Button>

      {/* Send Code Button */}
      <Button
        backgroundColor="black"
        borderRadius="$4"
        height={48}
        width="100%"
        marginTop="$3"
        onPress={() => router.push("/user/verify")}

      >
        <Text color="white" fontWeight="600">
          Send Me The Code
        </Text>
      </Button>

      {/* Footer */}
      <Text fontSize={12} color="black" marginTop="$2">
        We’ll never share your number
      </Text>
    </YStack>
  );
};

export default WelcomeScreen;
