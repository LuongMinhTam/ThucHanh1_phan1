import React from 'react'
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    name: {
        fontSize: 16,
    },
    separator: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 1,
    },
    sectionHeader: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "rgba(170, 170, 170)",
    },
});

const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator, item) => {
        const group = item.name.last[0].toUpperCase();

        if(accumulator[group]){
            accumulator[group].data.push(item);
        } else {
            accumulator[group] = {
                title: group,
                data: [item],
            };
        }

        return accumulator;
    }, {});

    const sections = Object.keys(groupedData).map((key) => {
        return groupedData[key];
    })

    return sections.sort((a, b) => {
        if(a.title > b.title) {
             return 1;
        }
        return -1;
    });
};

const PEOPLE =[
    {
        name: {
            title: "Ms",
            first: "Chuchun",
            last: "Maru"
        },
    },
    {
        name: {
            title: "Ms",
            first: "Aqua",
            last: "Rina"
        },
    },
    {
        name: {
            title: "Mr",
            first: "Robin",
            last: "Hud"
        },
    },
];

function Project8() {
  return (
    <SafeAreaView>
        <SectionList
            sections={groupPeopleByLastName(PEOPLE)}
            keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
            renderSectionHeader={({ section }) => {
                return (
                    <View style={styles.sectionHeader}>
                        <Text>{section.title}</Text>
                    </View>
                );
            }}
            renderItem={({ item }) => {
                return(
                    <View style={styles.row}>
                        <Text style={styles.name}>
                            {item.name.first} {item.name.last}
                        </Text>
                    </View>
                );
            }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    </SafeAreaView>
  );
};
export default Project8
