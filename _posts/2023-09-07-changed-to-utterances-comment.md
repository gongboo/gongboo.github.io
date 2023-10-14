---
layout: post
title: "블로그 댓글 utterances로 수정했다."
categories: journal
tags:
  - "journal"
  - "blog"
use_math: false
use_mermaid: false
---

# 블로그 댓글 utterances로 수정했다.

원래 disqus를 썼는데 언젠가부터 광고가 너무 과해지기 시작했다.

![1](https://blogger.googleusercontent.com/img/a/AVvXsEhBw7o07LTigeV7tEdwN0xa4AGA6ghdOQLlycbXDNRMbycmgCay1NWDquka4cecGu0mDq-2TpOfJX4yVXUFfIyVdPql9oDNf9A3ahXn0QmdGg3R6_s7p5sDfhw2Sj7u1SneCgI1vHSQUxR-1PA5L4PCk1ZYhVQKkEBnqaAyHUmCROyrqRdGR1JtClrJbGqP){: .smallImg}

위에 광고가 아래에도 있음..

유료로 돈내고 하면 없어지지만 싫다.

그래서 깃허브 이슈를 이용한 utterances를 써보기로 함.

일단 설치를 하는데 내가 이슈를 사용할 리포지토리로 접근가능하게 해준다.

내 블로그는 프라이빗으로 되어 있어서 블로그 댓글용으로 하나 리포지토리 만들었다.

![2](https://blogger.googleusercontent.com/img/a/AVvXsEjCjbEJ7fWxbb6e7ZNYF917RegEevrM77UwfOEBg1kuKNCdRT6po5pZrh-q0CbZwDS5nBQ8DA_e1pyddeqAJEyM4-1jdbPAViSs_3EKj_v1637YHU6xy350XucZBPVQaGTWpE1kvPL6pUh8KuLwQjdeasHfyBlbY9Jbf9B0CX15BxOsSDDjy_KN8ybQlXF5){: .smallImg}

만들면 생성 도움주는 사이트가 이렇게 뜨는데 빈칸이랑 항목 채우면 아래에 utterances 추가용 스크립트가 뜬다.

![3](https://blogger.googleusercontent.com/img/a/AVvXsEiM3JEuqeAOvxF5hZgzgQsw0XKDqjCGOKsWrrqrCVGvZeLTXEaAquaSUd-r888rg1YYJH87cwgGAKYT0aBQ-0FH0JcxziYVcFovxUwE7hDAkTOJy4JUEp-Bjm3m86_-E1eGylgjU_T70NpNvZg81diVpmc3JCw1dUnej3kPg1X-sym3rVPqtRDBjzDWF4o7){: .smallImg}

그대로 원하는 곳에 복붙해도 되지만 내꺼는 minimal mistakes 라는 템플릿을 사용했기 때문에 이거 만든 사람이 벌써 적용하기 쉽게 만들어둔 부분이 있어서 config 에서 comment 쪽이랑 utterances.html 쪽만 조금 수정했다.

![4](https://blogger.googleusercontent.com/img/a/AVvXsEjKTZ1IDM7K9ZXJsC9ZF2uNdmLh7R_q5qCnOQOOOe6OYS6td4XFH7PP0LfETSgGkwF9sBLcsUu44HiHLJjbrAcsV0TM7cc1WAEliaJaTOkx8yiFJnDKeL2ZjvhJqC5y0ggGURzzXPvXr2fnPj-NO6Er3pE5bLaHwTadNf4JGBPw7EGBCnjwEk3hGmCS-imo){: .smallImg}

내 블로그 리포지토리에서 이슈를 만든게 아니라 조금 수정이 필요했다.

완성해서 댓글 테스트 해보니 잘 작동한다.

마크다운도 사용 가능해서 좋다. 댓글에 필요할지는 모르겠지만..

![5](https://blogger.googleusercontent.com/img/a/AVvXsEh--QypFP9vHUhVH6BrBoGvN62xGd8v5DLJT_ay--znJpkJdsHFnUNxAUtyYQdemkk8LBpeYjzCcMYBaZgHZi6oZy8lIM9tQVsnwIZ1Idp1TBoQ_erS4camXxKpcELL-_McLLfRSm8AZ75QmYag5zqwj-NAJMUip3jzDQlWZisOcpFXW-9u5MuGDzQ_bmmg){: .smallImg}

내 리포지토리 이슈 가보면 utterances bot이 이런식으로 이슈 만들고 작동한 것을 볼 수 있다.

![6](https://blogger.googleusercontent.com/img/a/AVvXsEgaXGDi1cOBu6gH5J_Nxp0XdMBXXUykNDhonuN4HiDzx9bQCN453Wkyk6wEYhAr5DfWYGza-_ai7_mG_9-AfZQH3FKBDIrYH1XjV53ekFF3QgUjK9aAVwiopuGu99V_vd-U1y5kVtTXVfN9UiAAkysg-r4CoA4fsQzFry2RMOzWARfo8voceZ4UBeyMhqOV){: .smallImg}

후기

이슈로 댓글 만들 생각을 하다니 좋은 생각 인것 같다.

광고 없어져서 좋고 깔끔하다.

수정 구슬 마스코드 이모지가 귀엽다.
