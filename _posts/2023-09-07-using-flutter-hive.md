# flutter hive 사용하기

[https://docs.hivedb.dev/#/](https://docs.hivedb.dev/#/)

sqlite 보다 간결하고 편함.

안드로이드 ios 리눅스 맥 웹 윈도우를 지원한다!!

NoSQL 기반이라서 Key-value database이다.

다른 db 뭐있나 찾다가 drift(moor)도 해봤는데(변경시 자동 업데이트 지원)

이게 세팅이나 쓰기에는 더 쉽다.

pupspec에

```yaml
dependencies:
	hive: ^2.2.3
	hive_flutter: ^1.1.0

dev_dependencies:
  hive_generator:
  build_runner:
```

간결하게 키 밸류 할수도 있지만

밸류에 커스텀 오브젝트 들어갈 수도 있는데 그러려면 어댑터를 사용해야 한다.

커스텀 오브젝트를 이런식으로 작성해줬다

커스텀 오브젝트 문서 참고: [https://docs.hivedb.dev/#/custom-objects/hive_object?id=hiveobject](https://docs.hivedb.dev/#/custom-objects/hive_object?id=hiveobject)

```dart
import 'package:hive/hive.dart';
import 'package:uuid/uuid.dart';

part 'todo_item.g.dart';

@HiveType(typeId: 0)
class TodoItem {
  @HiveField(3)
  String id;

  @HiveField(0)
  String title;

  @HiveField(1)
  DateTime? timeCompleted;

  @HiveField(2)
  int index;

  TodoItem(this.title, this.timeCompleted, this.index) : id = Uuid().v4();
}
```

커스텀 오브젝트를 사용하므로 터미널에 이렇게 해서 어댑터를 생성한다. 그럼 ~.g.dart가 생김

```jsx
flutter packages pub run build_runner build
```

메인에 초기화

```dart
void main() async {
  await Hive.initFlutter();
  Hive.registerAdapter(TodoItemAdapter());
  runApp(TodoApp());
}
```

그리고 사용은 박스를 열고 데이터를 사용하는 식이다.

```dart
@override
void initState() {
  super.initState();
  _openBoxes();
}

Future<void> _openBoxes() async {
  todosBox = await Hive.openBox<TodoItem>('todos');
  completedTodosBox = await Hive.openBox<TodoItem>('completedTodos');
  _todos = todosBox.values.toList();
  _completedTodos = completedTodosBox.values.toList();
}
```

openbox로 init하면서 박스 열고 위젯에서 데이터 사용함.

**데이터 사용**:

api reference쪽 정리가 더 보기 편한 듯?

[https://pub.dev/documentation/hive/latest/](https://pub.dev/documentation/hive/latest/)

[https://pub.dev/documentation/hive_flutter/latest/](https://pub.dev/documentation/hive_flutter/latest/)

그중에서 Box 메서드만 알면 거의 다 된다.

[https://pub.dev/documentation/hive_flutter/latest/hive_flutter_adapters/Box-class.html](https://pub.dev/documentation/hive_flutter/latest/hive_flutter_adapters/Box-class.html)

- 데이터 추가: **`todosBox.add(newTodoItem);`**
- 데이터 삭제: **`todosBox.delete(key);`**
- 데이터 업데이트: **`todosBox.put(key, updatedTodoItem);`**
- 데이터 읽기: **`todosBox.get(key);`**
- 데이터 리스트로 불러오기: `List<TodoItem> todos = todosBox.values.toList();`
