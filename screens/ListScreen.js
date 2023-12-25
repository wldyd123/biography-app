import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, SectionList} from 'react-native';
import PageScreen from './PageScreen';

function ListScreen({navigation}) {
  let A = [
    {
      번호: '1',
      카테고리: '관계',
      질문: '내가 생각하는 건강한 관계란 어떤 것인가요?',
    },
    {
      번호: '2',
      카테고리: '관계',
      질문: '내가 사람과 관계맺는 방식은 어떤가요?',
    },
    {
      번호: '3',
      카테고리: '관계',
      질문: '누군가로 인해 힘들 때 나만의 대처 방법은 무엇인가요?',
    },
    {
      번호: '4',
      카테고리: '관계',
      질문: '언제 사람으로 인해 힘들었었나요? 무슨 일이 있었고 어떻게 대처했었나요?',
    },
    {
      번호: '5',
      카테고리: '관계',
      질문: '죽기 전, 나 스스로에게 남기고 싶은 말을 작성해주세요.',
    },
    {
      번호: '6',
      카테고리: '관계',
      질문: '내가 죽기 전, 주변 사람들에게 남길 유서의 내용은 무엇인가요? 작성해보세요.',
    },
    {
      번호: '7',
      카테고리: '관계',
      질문: '내가 가장 좋아하는 사람이 옆에 있다면, 지금 무슨 얘기를 해주고 싶나요?',
    },
    {번호: '8', 카테고리: '관계', 질문: '사랑하는 사람과 함께하고 있나요?'},
    {번호: '9', 카테고리: '관계', 질문: '사랑을 무엇이라고 생각하나요?'},
    {
      번호: '10',
      카테고리: '관계',
      질문: '나는 사랑을 주고 싶나요, 받고 싶나요?',
    },
    {
      번호: '11',
      카테고리: '관계',
      질문: '살면서 사랑을 언제 느끼고 경험하나요?',
    },
    {
      번호: '12',
      카테고리: '관계',
      질문: '이성과 사랑을 해본 적이 있나요? 어땠나요?',
    },
    {
      번호: '13',
      카테고리: '관계',
      질문: '앞으로 사랑을 한다면, 어떤 사랑을 하고 싶나요?',
    },
    {
      번호: '14',
      카테고리: '관계',
      질문: '내가 사랑하는 사람(들)은 누구인가요? 그(들)에게 무슨 얘기를 하고 싶나요?',
    },
    {
      번호: '15',
      카테고리: '관계',
      질문: '나는 나를 사랑하나요? 내가 나를 사랑하는 방식은 무엇인가요?',
    },
    {번호: '16', 카테고리: '관계', 질문: '나는 어떤 사람인가요?'},
    {번호: '17', 카테고리: '관계', 질문: '나의 장점과 단점은 무엇인가요?'},
    {
      번호: '18',
      카테고리: '관계',
      질문: '나는 내가 어떻게 보이나요? 어떤 사람이라고 생각하나요?',
    },
    {
      번호: '19',
      카테고리: '관계',
      질문: '내가 바라는 이상과 현실에 괴리가 있다고 느끼는 부분이 있다면 무엇인가요?',
    },
    {
      번호: '20',
      카테고리: '관계',
      질문: '이상과 현실의 괴리를 어떨때 느끼나요?',
    },
    {
      번호: '21',
      카테고리: '관계',
      질문: '이상과 현실의 괴리를 좁히기 위해 어떤 노력을 하고 있나요?',
    },
    {
      번호: '22',
      카테고리: '관계',
      질문: '나는 주변 사람과 어떤 관계를 맺고 싶나요?',
    },
    {
      번호: '23',
      카테고리: '관계',
      질문: '내가 남들에게 가장 하고 싶은 질문이 있다면 무엇인가요? 타인에게 어떤 게 가장 궁금한가요?',
    },
    {
      번호: '24',
      카테고리: '관계',
      질문: '자녀(들)에게 가장 해주고 싶은 말이 무엇인가요?',
    },
    {
      번호: '25',
      카테고리: '관계',
      질문: '나만의 인간관계를 잘 꾸리는 팁이 있다면 무엇인가요?',
    },
    {
      번호: '26',
      카테고리: '관계',
      질문: '어린 시절의 나에게 하고 싶은 말이 있다면 무엇인가요?',
    },
    {
      번호: '27',
      카테고리: '관계',
      질문: '내가 가장 좋아하는 친구는 누구이고 어떤 사람인가요?',
    },
    {
      번호: '28',
      카테고리: '관계',
      질문: '나와 함께 하는 연인이 있나요? 연인과 어떤 관계를 맺고 있나요?',
    },
    {
      번호: '29',
      카테고리: '관계',
      질문: '나는 사람에게서 주로 어떤 모습을 보고 실망하나요?',
    },
    {
      번호: '30',
      카테고리: '관계',
      질문: '누군가 잘못했을 때 상대방을 어떻게 대하나요?',
    },
    {
      번호: '31',
      카테고리: '관계',
      질문: '어릴 적 우리 부모님은 어떤 모습이셨나요? 또 내게 무슨 말을 주로 하셨나요?',
    },
    {
      번호: '32',
      카테고리: '관계',
      질문: '어릴 적 우리 가족의 모습은 어땠나요? ',
    },
    {
      번호: '33',
      카테고리: '관계',
      질문: '나는 내 가족 구성원과 어떤 관계를 맺고 있나요?',
    },
    {
      번호: '34',
      카테고리: '관계',
      질문: '내 가족에게 바라는 점이 있다면 무엇인가요?',
    },
    {
      번호: '35',
      카테고리: '관계',
      질문: '내 심장을 두근거리게 했던 첫사랑이 있나요? 어떻게 사랑에 빠졌나요?',
    },
    {
      번호: '36',
      카테고리: '관계',
      질문: '내가 이성을 볼 때 중요하게 여기는 부분이 무엇인가요?',
    },
    {
      번호: '37',
      카테고리: '관계',
      질문: '인생에서 고마운 사람은 누구인가요? 그 사람에게 뭐라고 하고 싶나요?',
    },
    {
      번호: '38',
      카테고리: '관계',
      질문: '내가 나를 대하는 방식은 무엇인가요? 벌을 주나요, 자비를 베푸나요?',
    },
    {
      번호: '39',
      카테고리: '관계',
      질문: '나는 세상과 어떤 관계를 맺고 있나요? 또는 어떤 관계를 맺고 싶나요?',
    },
  ];

  let B = [
    {
      번호: '40',
      카테고리: '소망',
      질문: '지금 당장 도전해 보고 싶은 것 세 가지를 적어주세요. ',
    },
    {
      번호: '41',
      카테고리: '소망',
      질문: '미래에 도전하고 싶은 일 세 가지를 적어주세요. ',
    },
    {
      번호: '42',
      카테고리: '소망',
      질문: '나는 80-90살 시니어가 되었을 때 어떤 모습이길 바라나요?',
    },
    {
      번호: '43',
      카테고리: '소망',
      질문: '나의 4-50대 중년층의 모습은 어떤가요? 어떤 모습이길 바라나요?',
    },
    {번호: '44', 카테고리: '소망', 질문: '나는 앞으로 어떻게 살고 싶나요?'},
    {
      번호: '45',
      카테고리: '소망',
      질문: '내가 요즘 목표로 삼고 있는 나의 목표가 있다면 무엇인가요?',
    },
    {
      번호: '46',
      카테고리: '소망',
      질문: '내가 삶에서 중요하게 여기는 가치가 있다면 무엇인가요?',
    },
    {
      번호: '47',
      카테고리: '소망',
      질문: '나는 어떤 가치를 가장 중요하게 여기나요?',
    },
    {
      번호: '48',
      카테고리: '소망',
      질문: '나는 명예,부,사랑 중 무엇이 가장 가치있다고 생각하나요?',
    },
    {
      번호: '49',
      카테고리: '소망',
      질문: '나는 죽을 때 사람들에게 어떤 사람으로 기억되고 싶나요?',
    },
    {
      번호: '50',
      카테고리: '소망',
      질문: '딱 1년 뒤, 이루고 싶은 게 있다면 무엇인가요?',
    },
    {
      번호: '51',
      카테고리: '소망',
      질문: '나는 올해 연말에 어떤 모습일 것 같나요? 올해까지 이루고 싶은 건 무엇인가요?',
    },
    {
      번호: '52',
      카테고리: '소망',
      질문: '이번 생에 가장 이루고 싶은 꿈을 얘기해주세요. 당신의 소망은 무엇인가요?',
    },
    {
      번호: '53',
      카테고리: '소망',
      질문: '내일 당장 죽는 다면 오늘 나는 뭘 하고 싶나요?',
    },
    {
      번호: '54',
      카테고리: '소망',
      질문: '내가 꿈꾸는 결혼식은 어떤 건가요?',
    },
    {
      번호: '55',
      카테고리: '소망',
      질문: '미래에 내가 긍정적으로 바라보는 것은 무엇인가요?',
    },
    {번호: '56', 카테고리: '소망', 질문: '내가 꿈꾸는 미래는 어떤가요?'},
    {
      번호: '57',
      카테고리: '소망',
      질문: '나의 꿈과 목표를 이루기 위해 무엇을 하고 있나요?',
    },
    {
      번호: '58',
      카테고리: '소망',
      질문: '노년에 하고 싶은 일을 3가지 얘기해주세요. ',
    },
    {
      번호: '59',
      카테고리: '소망',
      질문: '세상을 살며 아쉬움을 줄이기 위해 하고 싶은 일이 있다면 무엇인가요?',
    },
  ];

  let C = [
    {
      번호: '60',
      카테고리: '경험',
      질문: '살면서 가장 버티기 힘든 순간이 있었나요? 무엇때문에 힘들었었나요?',
    },
    {
      번호: '61',
      카테고리: '경험',
      질문: '학창 시절 내가 가장 좋아하는 과목은 무엇이었나요?',
    },
    {
      번호: '62',
      카테고리: '경험',
      질문: '어린 시절의 나를 떠올리면 어떤 장면과 어떤 감정이 떠오르나요?',
    },
    {
      번호: '63',
      카테고리: '경험',
      질문: '나는 어린 시절, 어떤 성격과 어떤 모습을 하고 있었나요.',
    },
    {
      번호: '64',
      카테고리: '경험',
      질문: '어린 시절 나의 꿈은 무엇이었나요? 나는 어떤 걸 꿈꾸었나요?',
    },
    {
      번호: '65',
      카테고리: '경험',
      질문: '지금의 나의 모습은 어떤 가요? 어렸을 때 꿈꾸던 나와 비슷한가요 또는 다른가요?',
    },
    {
      번호: '66',
      카테고리: '경험',
      질문: '어린 시절의 나는 미래의 내가 어떤 모습이길 바랐나요?',
    },
    {
      번호: '67',
      카테고리: '경험',
      질문: '커가면서 나의 생각과 가치관이 어떻게 형성되었나요? 가치관 형성에 중요한 역할을 했던 사건이 있나요?',
    },
    {
      번호: '68',
      카테고리: '경험',
      질문: '내가 가장 감명깊게 본 책 또는 영화는 무엇인가요?',
    },
    {
      번호: '69',
      카테고리: '경험',
      질문: '내 학창시절 중 어떤 순간이 가장 기억에 남나요?',
    },
    {
      번호: '70',
      카테고리: '경험',
      질문: '학창시절에 가장 힘들었던 순간이 있다면 언제였나요? 어떤 점이 가장 힘들었나요?',
    },
    {
      번호: '71',
      카테고리: '경험',
      질문: '나의 대학생 때 전공은 무엇이었나요? 어떻게 이 전공을 선택하게 되었나요?',
    },
    {
      번호: '72',
      카테고리: '경험',
      질문: '어릴 적 남몰래 간직한 꿈이 있다면 무엇이었나요?',
    },
    {번호: '73', 카테고리: '경험', 질문: '어릴 적 나의 성격은 어땠나요?'},
    {
      번호: '74',
      카테고리: '경험',
      질문: '살면서 가장 인상 깊었던 경험이 무엇인가요? 그 경험에서 어떤 걸 느꼈나요?',
    },
    {
      번호: '75',
      카테고리: '경험',
      질문: '한 번 더 해보고 싶은 경험이 있다면 무엇인가요?',
    },
    {
      번호: '76',
      카테고리: '경험',
      질문: '타인에게 상처 준 순간이 언제인가요? 다시 그때로 돌아간다면 어떻게 하고 싶나요?',
    },
    {
      번호: '77',
      카테고리: '경험',
      질문: '삶에서 가장 후회되는 순간을 얘기해주세요.',
    },
    {
      번호: '78',
      카테고리: '경험',
      질문: '나를 가장 오랫동안 괴롭혔던 기억은 무엇인가요.',
    },
    {
      번호: '79',
      카테고리: '경험',
      질문: '인생에 기억에 남는 사람이 있다면 얘기해주세요. ',
    },
    {
      번호: '80',
      카테고리: '경험',
      질문: '지금 떠오르는, 기억에 남는 사건이 있다면 얘기해주세요. ',
    },
  ];

  let D = [
    {
      번호: '81',
      카테고리: '일',
      질문: '나는 전공과 연관된 일을 하고 있나요? 아니라면 어떻게 지금의 일을 하게 되었나요?',
    },
    {
      번호: '82',
      카테고리: '일',
      질문: '지금의 내가 다니는 직장은 어떤 부분이 가장 만족 또는 불만족스러운가요?',
    },
    {
      번호: '83',
      카테고리: '일',
      질문: '나는 지금까지 어떤 일을 해왔나요? 당신의 커리어를 얘기해주세요. ',
    },
    {
      번호: '84',
      카테고리: '일',
      질문: '10대 때 하지 못해 아쉬운 일이 있다면 어떤 건가요?',
    },
    {
      번호: '85',
      카테고리: '일',
      질문: '20대 때 하지 못해 아쉬운 일이 있다면 어떤 건가요?',
    },
    {
      번호: '86',
      카테고리: '일',
      질문: '일을 하면서 가장 성취감을 느낀 순간이 언제였나요? 어떤 일이었나요?',
    },
    {
      번호: '87',
      카테고리: '일',
      질문: '내 일에 대해 내가 좋아하는 부분은 무엇인가요?',
    },
    {
      번호: '88',
      카테고리: '일',
      질문: '일을 하면서 가장 보람찼던 순간은 언제였나요?',
    },
    {번호: '89', 카테고리: '일', 질문: '내가 하는 일을 사랑하나요?'},
    {
      번호: '90',
      카테고리: '일',
      질문: '다시 태어난다면 지금 하는 일을 또 할 건가요?',
    },
    {번호: '91', 카테고리: '일', 질문: '앞으로 어떤 일을 하고 싶나요?'},
  ];

  let E = [
    {
      번호: '92',
      카테고리: '일상',
      질문: '내가 오늘 하루, 가장 많이 생각하는 것은 무엇인가요?',
    },
    {
      번호: '93',
      카테고리: '일상',
      질문: '나는 요즘 어떤 것에 관심을 기울이고 있나요?',
    },
    {
      번호: '94',
      카테고리: '일상',
      질문: '내가 가진 좋은 습관은 무엇인가요?',
    },
    {
      번호: '95',
      카테고리: '일상',
      질문: '내가 가진 나쁜 습관은 무엇인가요?',
    },
    {
      번호: '96',
      카테고리: '일상',
      질문: '앞으로 어떤 습관을 가지고 싶나요?',
    },
    {
      번호: '97',
      카테고리: '일상',
      질문: '지금 삶에서 가장 고민하고 있는 것이 무엇인가요? 어떤 부분이 가장 고민이 되나요?',
    },
    {
      번호: '98',
      카테고리: '일상',
      질문: '내가 하루 중 가장 좋아하는 시간은 언제인가요? 나는 그 시간에 무얼 하고 있나요?',
    },
    {
      번호: '99',
      카테고리: '일상',
      질문: '요즘 내 마음을 가장 많이 채워주는 건 무엇인가요?',
    },
    {
      번호: '100',
      카테고리: '일상',
      질문: '나는 평소에 어떤 취미를 가지고 있나요? 무얼 할 때 행복한가요?',
    },
    {
      번호: '101',
      카테고리: '일상',
      질문: '내가 생각하는 취미의 정의는 무엇인가요? 취미는 어떤 건가요?',
    },
    {
      번호: '102',
      카테고리: '일상',
      질문: '내가 혼자서 즐기는 취미는 무엇인가요? 어떤 걸 혼자하는 걸 좋아하나요?',
    },
    {번호: '103', 카테고리: '일상', 질문: '내가 느끼는 현실은 어떤가요?'},
    {
      번호: '104',
      카테고리: '일상',
      질문: '매일 나의 삶을 지켜주는 루틴이 있다면 무엇인가요?',
    },
    {
      번호: '105',
      카테고리: '일상',
      질문: '내가 매일 지키는 규칙을 얘기해주세요. ',
    },
    {
      번호: '106',
      카테고리: '일상',
      질문: '주기적으로 나만이 가지는 의식(ritual)이 있다면 무엇인가요?',
    },
    {
      번호: '107',
      카테고리: '일상',
      질문: '지금 나의 삶은 어떤가요? 안정되어 있나요?',
    },
    {
      번호: '108',
      카테고리: '일상',
      질문: '지금 내가 불안함을 느끼는 게 있다면 무엇인가요?',
    },
    {번호: '109', 카테고리: '일상', 질문: '내가 좋아하는 음식은 뭔가요?'},
    {
      번호: '110',
      카테고리: '일상',
      질문: '불안함을 극복하기 위해 하는 노력이 있다면 무엇인가요?',
    },
    {
      번호: '111',
      카테고리: '일상',
      질문: '나는 불안감을 어떻게 대처하나요?',
    },
    {
      번호: '112',
      카테고리: '일상',
      질문: '나에게 편안함을 주는 장소는 어디인가요?',
    },
    {
      번호: '113',
      카테고리: '일상',
      질문: '내가 좋아하는 장소는 어떤 곳인가요?',
    },
    {
      번호: '114',
      카테고리: '일상',
      질문: '평소에 가보고 싶은 곳이 있다면 어디인가요?',
    },
    {
      번호: '115',
      카테고리: '일상',
      질문: '내가 좋아하는 음악 장르는 무엇인가요?',
    },
    {
      번호: '116',
      카테고리: '일상',
      질문: '내가 좋아하는 가수에 대해 얘기해주세요.',
    },
    {
      번호: '117',
      카테고리: '일상',
      질문: '요즘 뭘 할 때 가장 즐거운 가요?',
    },
  ];

  let F = [
    {
      번호: '118',
      카테고리: '자유글',
      질문: '자유글',
    },
  ];
  const separatorView = () => {
    return <View style={styles.listItemSeparatorStyle} />;
  };

  return (
    <SafeAreaView>
      <View>
        <SectionList
          ItemSeparatorComponent={separatorView}
          sections={[
            {title: '관계', data: A},
            {title: '소망', data: B},
            {title: '경험', data: C},
            {title: '일', data: D},
            {title: '일상', data: E},
            {title: '자유글', data: F},
          ]}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderStyle}>{section.title}</Text>
          )}
          renderItem={({item}) => (
            <View>
              <Text
                style={styles.sectionListItemStyle}
                onPress={() =>
                  navigation.navigate('Page', {question: item.질문})
                }
                question={item.질문}>
                {item.질문}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  listItemSeparatorStyle: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
  sectionHeaderStyle: {
    backgroundColor: 'blue',
    fontSize: 25,
    padding: 5,
    color: 'white',
  },
  sectionListItemStyle: {
    fontSize: 15,
    padding: 15,
  },
});
