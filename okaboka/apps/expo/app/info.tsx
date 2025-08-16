import { router } from "expo-router";
import React, { useState } from "react";
import { YStack, XStack, Text, Button, Input, Select } from "tamagui";

const InfoScreen = () => {
  const [interestedIn, setInterestedIn] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [userType, setUserType] = useState("");

  return (
    <YStack flex={1} bg="#3EC4A4" p="$5" space="$5">
      {/* Title */}
      <Text fontSize={20} fontWeight="700" color="black">
        Let us understand who you're looking for and where you're at.
      </Text>

      {/* Interested In */}
      <Text fontWeight="700" color="black">
        Interested In <Text fontWeight="400">(Who’s energy do you connect with?)</Text>
      </Text>
      <XStack space="$3" flexWrap="wrap">
        {["Male", "Female", "Other"].map((option) => (
          <Button
            key={option}
            bg={interestedIn === option ? "black" : "white"}
            color={interestedIn === option ? "white" : "black"}
            borderRadius="$4"
            onPress={() => setInterestedIn(option)}
          >
            {option}
          </Button>
        ))}
      </XStack>

      {/* Relationship Status */}
      <Text fontWeight="700" color="black">
        Relationship Status
      </Text>
      <XStack space="$3" flexWrap="wrap">
        {["Single", "In A Relationship", "Prefer Not To Say"].map((option) => (
          <Button
            key={option}
            bg={relationshipStatus === option ? "black" : "white"}
            color={relationshipStatus === option ? "white" : "black"}
            borderRadius="$4"
            onPress={() => setRelationshipStatus(option)}
          >
            {option}
          </Button>
        ))}
      </XStack>

      {/* Are You */}
      <Text fontWeight="700" color="black">
        Are You
      </Text>
      <XStack space="$3" flexWrap="wrap">
        {["Student", "Employee", "Freelancer", "Other"].map((option) => (
          <Button
            key={option}
            bg={userType === option ? "black" : "white"}
            color={userType === option ? "white" : "black"}
            borderRadius="$4"
            onPress={() => setUserType(option)}
          >
            {option}
          </Button>
        ))}
      </XStack>

      {/* Extra fields based on selection */}
      {userType === "Student" && (
        <YStack space="$3" mt="$3">
          <Text fontWeight="600" color="black">
            What’s your School/college name?
          </Text>
          <Input placeholder="Enter name" bg="white" borderRadius="$4" px="$3" />

          <Text fontWeight="600" color="black">
            Currently studying in?
          </Text>
            <Input placeholder="Enter class/year" bg="white" borderRadius="$4" px="$3" />
          {/* <Select defaultValue="Select">
            <Select.Trigger bg="white" borderRadius="$4" px="$3">
              <Select.Value placeholder="Choose class/year" />
            </Select.Trigger>
          </Select> */}
        </YStack>
      )}

      {userType === "Employee" && (
        <YStack space="$3" mt="$3">
          <Text fontWeight="600" color="black">
            Where do you work?
          </Text>
          <Input placeholder="Company name" bg="white" borderRadius="$4" px="$3" />
          <Text fontWeight="600" color="black">
            Your Role?
          </Text>
          <Input placeholder="Job title" bg="white" borderRadius="$4" px="$3" />
        </YStack>
      )}

      {userType === "Freelancer" && (
        <YStack space="$3" mt="$3">
          <Text fontWeight="600" color="black">
            What kind of freelancing do you do?
          </Text>
          <Input placeholder="e.g. Designer, Developer" bg="white" borderRadius="$4" px="$3" />
        </YStack>
      )}

      {userType === "Other" && (
        <YStack space="$3" mt="$3">
          <Text fontWeight="600" color="black">
            Please specify
          </Text>
          <Input placeholder="Tell us more" bg="white" borderRadius="$4" px="$3" />
        </YStack>
      )}

      {/* Continue Button */}
      <Button bg="black" color="white" borderRadius="$4" height={48} mt="$4" onPress={() => router.push("/homescreen")}>
        Continue
      </Button>

      {/* Skip */}
      <Text textAlign="center" mt="$3" fontWeight="600" color="black">
        Skip For Now
      </Text>
    </YStack>
  );
};

export default InfoScreen;
