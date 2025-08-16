import React from "react";
import { YStack, XStack, Input, Button, Text } from "tamagui";
import { ArrowLeft, MapPin } from "@tamagui/lucide-icons";
import { router } from "expo-router";

const AboutYouScreen = () => {
  return (
    <YStack flex={1} bg="#36C1A1" p="$6" space="$4">
      {/* Back Button */}
      <Button
        unstyled
        onPress={() => {}}
        icon={<ArrowLeft size={24} color="black" />}
        mb="$2"
      />

      {/* Heading */}
      <Text fontSize={20} fontWeight="700" color="black" mb="$3">
        A little about you so we match better
      </Text>

      {/* Date of Birth */}
      <Text fontSize={14} fontWeight="600" color="black">
        Date of Birth
      </Text>
      <XStack space="$2" mt="$2">
        <Input
          placeholder="DD"
          flex={1}
          height={48}
          textAlign="center"
          borderRadius={12}
          bg="white"
        />
        <Input
          placeholder="MM"
          flex={1}
         height={48}
          textAlign="center"
          borderRadius={12}
          bg="white"
        />
        <Input
          placeholder="YYYY"
          flex={1}
         height={48}
          textAlign="center"
          borderRadius={12}
          bg="white"
        />
      </XStack>

      {/* Gender */}
      <Text fontSize={14} fontWeight="600" color="black" mt="$4">
        Gender
      </Text>
      <XStack space="$2" mt="$2">
        <Button
          flex={1}
         height={48}
          bg="white"
          borderRadius={12}
          color="black"
          fontWeight="600"
        >
          Male
        </Button>
        <Button
          flex={1}
         height={48}
          bg="white"
          borderRadius={12}
          color="black"
          fontWeight="600"
        >
          Female
        </Button>
        <Button
          flex={1}
         height={48}
          bg="white"
          borderRadius={12}
          color="black"
          fontWeight="600"
        >
          Other
        </Button>
      </XStack>

      {/* Location */}
      <Text fontSize={14} fontWeight="600" color="black" mt="$4">
        Location <Text fontWeight="400">(City, Country)</Text>
      </Text>
      <Input
        placeholder="Enter location"
       height={48}
        borderRadius={12}
        bg="white"
        mt="$2"
      />

      {/* Use Current Location */}
      <XStack alignItems="center" space="$2" mt="$2">
        <MapPin size={16} color="black" />
        <Text fontSize={14} color="black">
          Use current location
        </Text>
      </XStack>

      {/* Continue Button */}
      <Button
        mt="auto"
        height={52}
        bg="black"
        borderRadius={12}
        alignSelf="center"
        width="100%"
        onPress={() => router.push("/info")}
      >
        <Text color="white" fontWeight="600" fontSize={16}>
          Continue
        </Text>
      </Button>

      {/* Footer */}
      <Text fontSize={12} color="black" textAlign="center" mt="$2">
        Who are you open to connecting with?
      </Text>
    </YStack>
  );
};

export default AboutYouScreen;
