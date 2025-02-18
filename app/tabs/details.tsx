import { Image, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useRef, useState } from 'react';
import DescribeCard from "@/components/DescribeCard";
import { ScrollView } from "react-native-gesture-handler";
import { useLocalSearchParams } from 'expo-router';


const cardData: any = {
    1: {
        imageSource: require('../../assets/images/dog.png'),
        description: "The Labrador Retriever, commonly known as the Lab, is a medium to large-sized dog renowned for its friendly and outgoing nature. Labs typically weigh between 55 to 80 pounds and stand about 21.5 to 24.5 inches tall at the shoulder. They have a short, dense, and water-resistant double coat that comes in three main colors: black, yellow, and chocolate. Labs are well-loved for their gentle demeanor, making them great companions for children and other pets. Their high intelligence and eagerness to please make them highly trainable. However, they are also energetic dogs that require regular exercise and enjoy activities like fetch, swimming, and running. With a typical lifespan of 10 to 12 years, Labs are generally healthy but can be prone to hip and elbow dysplasia, among other common health issues. Overall, the Labrador Retriever is a versatile and affectionate breed, well-suited to both families and individuals."
    },
    2: {
        imageSource: require('../../assets/images/dog1.png'),
        describe: "The Rottweiler is a powerful and robust breed, known for its strength, loyalty, and protective nature. This medium to large-sized dog typically weighs between 80 to 135 pounds and stands about 22 to 27 inches tall at the shoulder. They have a short, dense, and glossy black coat with distinct tan markings on their face, chest, and legs. Rottweilers possess a broad head, strong jaws, and a muscular build, giving them a confident and imposing appearance. They are intelligent, confident, and calm, making them excellent guard dogs and devoted family companions. With proper training and socialization from an early age, Rottweilers can be good with children and other pets. Their typical lifespan is 8 to 10 years, and they are prone to certain health issues, such as hip and elbow dysplasia, heart problems, and certain types of cancer. Regular exercise is essential to keep them physically and mentally stimulated. Overall, the Rottweiler is a loyal and protective breed, best suited for experienced dog owners who can provide the leadership and training they need."
    },
    3: {
        imageSource: require('../../assets/images/dog2.png'),
        description:"The Golden Retriever is a beloved and popular breed, known for its friendly, intelligent, and loyal nature. This medium to large-sized dog typically weighs between 55 to 75 pounds and stands about 21.5 to 24 inches tall at the shoulder. Golden Retrievers have a dense, water-repellent double coat that ranges from light golden to dark golden in color, with a distinctive feathering on their legs, chest, and tail. They have a broad head, friendly eyes, and a strong build, giving them a balanced and graceful appearance. Golden Retrievers are highly trainable and eager to please, making them excellent family pets, therapy dogs, and service animals. Their gentle and patient temperament makes them great with children and other pets. With a typical lifespan of 10 to 12 years, Golden Retrievers are prone to certain health issues such as hip dysplasia, heart problems, and certain types of cancer. They require regular exercise and mental stimulation to keep them happy and healthy. Overall, the Golden Retriever is a versatile and affectionate breed, well-suited to a variety of roles and environments."
    },
    4: {
        imageSource: require('../../assets/images/dog3.png'),
        description:"The German Shepherd is a highly intelligent and versatile breed, known for its loyalty, courage, and working ability. This large-sized dog typically weighs between 50 to 90 pounds and stands about 22 to 26 inches tall at the shoulder. German Shepherds have a double coat that can be medium or long, with colors ranging from black and tan to sable, black, and even white. They possess a strong, athletic build with a distinctive, slightly sloping back, and erect ears that give them a keen, alert expression. German Shepherds are known for their intelligence and trainability, making them excellent working dogs in roles such as police, military, search and rescue, and service dogs. They are also loyal family companions, protective of their loved ones and good with children when properly socialized. With a typical lifespan of 9 to 13 years, German Shepherds can be prone to health issues such as hip and elbow dysplasia, degenerative myelopathy, and certain genetic conditions. They require regular exercise, mental stimulation, and consistent training to thrive. Overall, the German Shepherd is a loyal and dedicated breed, well-suited for active families and individuals who can provide the leadership and activity they need."
    },
    5: {
        imageSource:require('../../assets/images/dog4.jpg'),
        description: "The Beagle is a small to medium-sized breed, known for its friendly, curious, and energetic nature. Typically weighing between 20 to 30 pounds and standing about 13 to 15 inches tall at the shoulder, Beagles have a compact and sturdy build. They possess a short, smooth coat that comes in a variety of colors, including tri-color (black, tan, and white), red and white, lemon, and others. Beagles have large, expressive brown eyes and long, floppy ears that give them an endearing and alert expression. Beagles are renowned for their keen sense of smell and tracking ability, making them excellent hunting and detection dogs. They are also sociable and affectionate, getting along well with children and other pets, making them great family companions. Their playful and curious demeanor requires regular exercise and mental stimulation to prevent boredom and destructive behavior. Beagles are known to be vocal, often using their distinctive bark or howl to communicate. With a typical lifespan of 12 to 15 years, Beagles are generally healthy but can be prone to certain health issues such as hip dysplasia, epilepsy, and hypothyroidism. They thrive in environments where they can explore and engage their senses. Overall, the Beagle is a lovable and spirited breed, well-suited for active families who can provide the attention and activity they need."
    },
    6: {
        imageSource: require('../../assets/images/dog5.jpg'),
        description: "The Shih Tzu is a small, charming, and affectionate breed, known for its luxurious coat and friendly personality. Typically weighing between 9 to 16 pounds and standing about 9 to 10.5 inches tall at the shoulder, Shih Tzus have a sturdy and compact build. They boast a long, flowing double coat that can come in a variety of colors, including gold, white, black, brindle, and more. Their distinctive face features large, dark eyes and a short, pushed-in muzzle, giving them a sweet and expressive appearance. Shih Tzus are renowned for their friendly and outgoing nature, making them excellent companions for families, singles, and seniors alike. They are affectionate and love being the center of attention, often forming strong bonds with their owners. Despite their small size, Shih Tzus are known to be confident and sometimes exhibit a playful and lively demeanor. They do well in apartments and houses, provided they get regular short walks and indoor playtime. With a typical lifespan of 10 to 16 years, Shih Tzus can be prone to certain health issues such as brachycephalic syndrome, hip dysplasia, and eye problems. Regular grooming is essential to maintain their long coat and prevent matting. Overall, the Shih Tzu is a delightful and loyal breed, well-suited for those who can provide the love and care they thrive on."
    }

}
export default function Details() {
    const { id } = useLocalSearchParams();
    const scrollRef = useRef<ScrollView>(null);
    const [cardOffsets, setCardOffsets] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        if (scrollRef.current && id) {
            const targetId = parseInt(id.toString());
            const offsetY = cardOffsets[targetId];
            if (offsetY !== undefined) {
                scrollRef.current.scrollTo({
                    y: offsetY,
                    animated: true,
                });
            }
        }
    }, [id, cardOffsets]);

    const handleCardLayout = (id: number, event: any) => {
        const { y } = event.nativeEvent.layout;
        setCardOffsets(prevOffsets => ({
            ...prevOffsets,
            [id]: y,
        }));
    };

    return (
        <ScrollView ref={scrollRef} style={styles.container}>
            <View style={styles.allCardsContainer}>
                {Object.keys(cardData).map(key => {
                    const card = cardData[parseInt(key)];
                    return (
                        <View key={key} onLayout={(event) => handleCardLayout(parseInt(key), event)}>
                            <DescribeCard
                                id={parseInt(key)}
                                imageSource={card.imageSource}
                                description={card.description}
                            />
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5FCFF',
    },
    allCardsContainer: {
        marginTop: 20,
    },
});