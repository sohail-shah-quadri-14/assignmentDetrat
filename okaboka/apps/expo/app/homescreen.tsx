import React from "react";
import {
    YStack,
    XStack,
    Text,
    Button,
    Image,
    Separator,
    ScrollView,
    View,
} from "tamagui";
import {
    Bell,
    ArrowLeft,
    ArrowRight,
    MapPin,
    MoreVertical,
    Users,
    Plus,
} from "@tamagui/lucide-icons";
import * as ImagePicker from "expo-image-picker";

type CardProps = {
    date: string;
    location: string;
    feelingEmoji: string;
    feelingLabel?: string;
    text: string;
    images: string[]; // 8 images (2 rows of 4)
    moreLabel: string;
};

const Card: React.FC<CardProps> = ({
    date,
    location,
    feelingEmoji,
    feelingLabel = "Feeling of the Day",
    text,
    images,
    moreLabel,
}) => {
    return (
        <YStack
            bg="white"
            borderRadius={18}
            borderWidth={1}
            borderColor="#E9E9E9"
            padding="$4"
            marginHorizontal="$3"
            marginBottom="$5"
            shadowColor="#00000010"
            shadowOpacity={0.1}
            shadowRadius={8}
        >
            {/* Header row */}
            <XStack alignItems="center" justifyContent="space-between">
                <Text fontSize={18} fontWeight="700" color="black">
                    {date}
                </Text>

                <XStack alignItems="center" gap="$2">
                    <Text fontSize={22}>{feelingEmoji}</Text>
                    <Text fontSize={12} color="#666">
                        {feelingLabel}
                    </Text>
                    <MoreVertical size={18} color="#777" />
                </XStack>
            </XStack>

            {/* Location */}
            <XStack alignItems="center" gap="$2" marginTop="$2">
                <MapPin size={16} color="#e74c3c" />
                <Text fontSize={14} color="#333">
                    {location}
                </Text>
            </XStack>

            <Separator marginVertical="$3" />

            {/* Body text */}
            <Text
                fontSize={14}
                color="#333"
                textAlign="center"
                lineHeight={20}
                marginHorizontal="$2"
                marginBottom="$3"
            >
                {text}
            </Text>

            {/* Image grid – 2 rows × 4 */}
            <YStack gap="$3">
                <XStack gap="$3" justifyContent="space-between">
                    {images.slice(0, 4).map((uri, idx) => (
                        <Image
                            key={`row1-${idx}`}
                            source={{ uri }}
                            width="23%"
                            height={90}
                            borderRadius={10}
                        />
                    ))}
                </XStack>
                <XStack gap="$3" justifyContent="space-between">
                    {images.slice(4, 8).map((uri, idx) => (
                        <Image
                            key={`row2-${idx}`}
                            source={{ uri }}
                            width="23%"
                            height={90}
                            borderRadius={10}
                        />
                    ))}
                </XStack>
            </YStack>

            {/* Footer: more moments */}
            <YStack alignItems="center" marginTop="$3">
                <Text fontSize={14} color="#333" marginBottom="$1">
                    {moreLabel}
                </Text>
                <Text fontSize={18} color="#b06">⌃</Text>
            </YStack>
        </YStack>
    );
};

const HomeMomentsScreen: React.FC = () => {
    // demo photos
    const photos1 = [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
        "https://images.unsplash.com/photo-1520975671610-7125f04c1a6b?w=400",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400",
        "https://images.unsplash.com/photo-1500534314210-aa3c9a4a7e67?w=400",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=401",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=401",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=401",
    ];

    const photos2 = [
        "https://images.unsplash.com/photo-1514511541181-4ff12b1e3798?w=400",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=401",
        "https://images.unsplash.com/photo-1514511541181-4ff12b1e3798?w=401",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=401",
        "https://images.unsplash.com/photo-1500534314210-aa3c9a4a7e67?w=401",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=401",
    ];

    const photos3 = [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=400",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400",
        "https://images.unsplash.com/photo-1526481280698-8fcc13fd56bb?w=400",
        "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=401",
        "https://images.unsplash.com/photo-1526481280698-8fcc13fd56bb?w=401",
    ];

    return (
        <YStack flex={1} bg="#3EC4A4">
            {/* TOP BAR */}
            <YStack paddingTop="$5" paddingHorizontal="$3" paddingBottom="$3" bg="#3EC4A4">
                <XStack alignItems="center" justifyContent="space-between">
                    <XStack alignItems="center" gap="$3">
                        <Image
                            source={require("../../assests/logo1.png")} // replace with your logo path
                            width={36}
                            height={36}
                            borderRadius={18}
                        />
                        <Text fontSize={22} fontWeight="800" color="black">
                            OkaBoka
                        </Text>
                    </XStack>

                    <XStack alignItems="center" gap="$4">
                        <Bell size={22} color="black" />
                        <Image
                            source={{
                                uri: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162179.jpg",
                            }}
                            width={36}
                            height={36}
                            borderRadius={18}
                        />
                    </XStack>
                </XStack>
            </YStack>

            <Separator borderColor="#e5e5e5" />

            {/* FEELING NOW */}
            <YStack paddingHorizontal="$3" paddingTop="$3" paddingBottom="$2" bg="#3EC4A4">
                <Text
                    fontSize={22}
                    fontWeight="800"
                    color="black"
                    textAlign="center"
                    marginBottom="$2"
                >
                    How I’m Feeling Right Now
                </Text>

                <XStack alignItems="center" justifyContent="space-between" marginTop="$1">
                    <ArrowLeft size={26} color="black" />
                    <YStack alignItems="center" gap="$1">
                        <Text fontSize={48}>😞</Text>
                        <Text fontSize={16} color="#111" fontWeight="700">
                            Sad
                        </Text>
                        <XStack alignItems="center" gap="$1">
                            <Users size={14} color="#111" />
                            <Text fontSize={12} color="#111">1.5k</Text>
                        </XStack>
                    </YStack>
                    <ArrowRight size={26} color="black" />
                </XStack>

                {/* small emojis row */}
                <XStack justifyContent="space-between" marginTop="$3" paddingHorizontal="$3">
                    <YStack alignItems="center">
                        <Text fontSize={34}>😊</Text>
                        <Text marginTop="$1">Happy</Text>
                    </YStack>
                    <YStack alignItems="center">
                        <Text fontSize={34}>😘</Text>
                        <Text marginTop="$1">Romantic</Text>
                    </YStack>
                    <YStack alignItems="center">
                        <Text fontSize={34}>😐</Text>
                        <Text marginTop="$1">Neutral</Text>
                    </YStack>
                    <YStack alignItems="center">
                        <Text fontSize={34}>🤩</Text>
                        <Text marginTop="$1">Excited</Text>
                    </YStack>
                </XStack>
            </YStack>

            {/* CONTENT */}
            <YStack flex={1} bg="#F7F7F7" borderTopLeftRadius={18} borderTopRightRadius={18}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 160 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View height="$3" />

                    <Card
                        date="July 07, 2025"
                        location="Metro Manila, Philippines"
                        feelingEmoji="😊"
                        text="You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city."
                        images={photos1}
                        moreLabel="8 More Moments"
                    />

                    <Card
                        date="July 27, 2025"
                        location="Bataan, Philippines"
                        feelingEmoji="🤩"
                        text="You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city."
                        images={photos2}
                        moreLabel="5 More Moments"
                    />

                    <Card
                        date="July 27, 2025"
                        location="Bataan, Philippines"
                        feelingEmoji="🤩"
                        text="You spent time by the shore — embraced by salty breeze, golden sand, and the gentle heartbeat of the sea."
                        images={photos3}
                        moreLabel="6 More Moments"
                    />
                </ScrollView>

                {/* Floating Action Button */}
                <Button
                    position="absolute"
                    right={150}
                    bottom={88}
                    width={44}
                    height={44}
                    borderRadius={32}
                    borderColor={"#110909ff"}
                    borderWidth={3}
                    bg="#19A783"
                    alignItems="center"
                    justifyContent="center"
                    shadowColor="#00000030"
                    shadowOpacity={0.3}
                    shadowRadius={8}
                    onPress={() => ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                    })
                        .then((result) => {
                            if (!result.canceled) {
                                console.log("Selected image:", result.assets[0].uri);
                            } else {
                                console.log("Image selection canceled");
                            }
                        })
                        .catch((error) => {
                            console.error("Error picking image:", error);
                        })}     
                >
                    <Plus size={28} color="white" />
                </Button>

                {/* Bottom Tab Bar */}
                <XStack
                    position="absolute"
                    left={0}
                    right={0}
                    bottom={0}
                    height={72}
                    bg="#2FB99A"
                    alignItems="center"
                    justifyContent="space-around"
                    paddingHorizontal="$4"
                    borderTopLeftRadius={0}
                    borderTopRightRadius={0}
                >
                    <Text fontSize={18} fontWeight="800" color="black">
                        Oka (You)
                    </Text>
                    <Text fontSize={18} fontWeight="800" color="black">
                        Bond
                    </Text>
                    <Text fontSize={18} fontWeight="800" color="black">
                        Oka’s
                    </Text>
                </XStack>
            </YStack>
        </YStack>
    );
};

export default HomeMomentsScreen;
