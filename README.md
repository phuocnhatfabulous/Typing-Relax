#Android
<img src = "/imgs/android1.png">

1. Adapter / StudentApdater

```java
    package com.phuocnhat.myapplication.adapter;
    import android.content.Context;
    import android.view.LayoutInflater;
    import android.view.View;
    import android.view.ViewGroup;
    import android.widget.BaseAdapter;
    import android.widget.TextView;

    import com.phuocnhat.myapplication.module.Student;
    import com.phuocnhat.myapplication.R;
    import com.phuocnhat.myapplication.module.Student;

    import java.util.List;

    public class StudentAdapter extends BaseAdapter {
        private Context context;
        private int layout;
        private List<Student> students;
        public StudentAdapter(Context context, int layout, List<Student> students) {
            this.context = context;
            this.layout = layout;
            this.students = students;
        }

        @Override
        public int getCount() {
            return students.size();
        }

        @Override
        public Object getItem(int i) {
            return students.get(i);
        }

        @Override
        public long getItemId(int i) {
            return students.get(i).getId();
        }


        private class ViewHolder{
            TextView txtFullName, txtClassName, txtStudentCode;
        }

        @Override
        public View getView(int i, View view, ViewGroup viewGroup) {
            ViewHolder viewHolder;

            if(view == null){
                viewHolder = new ViewHolder();
                LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
                view = inflater.inflate(layout, null);
                viewHolder.txtFullName = view.findViewById(R.id.txtFullName);
                viewHolder.txtClassName = view.findViewById(R.id.txtClassName);
                viewHolder.txtStudentCode = view.findViewById(R.id.txtStudentCode);
                view.setTag(viewHolder);
            }else{
                viewHolder = (ViewHolder) view.getTag();
            }

            Student student = students.get(i);
            viewHolder.txtFullName.setText(student.getFullName());
            viewHolder.txtClassName.setText(student.getClassName());
            viewHolder.txtStudentCode.setText(student.getStudentCode());

            return view;
        }
    }
```

2. Module/Student

```java
    package com.phuocnhat.myapplication.module;
    public class Student {
    private int id;
    public String fullName;
    private String className;
    private String studentCode;


    public Student(int id, String fullName, String className, String studentCode) {
        this.id = id;
        this.fullName = fullName;
        this.className = className;
        this.studentCode = studentCode;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getStudentCode() {
        return studentCode;
    }

    public void setStudentCode(String studentCode) {
        this.studentCode = studentCode;
    }
}
```

3. Database

```java
package com.phuocnhat.myapplication;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.database.sqlite.SQLiteStatement;

import androidx.annotation.Nullable;

public class Database extends SQLiteOpenHelper {
    public Database(@Nullable Context context, @Nullable String name, @Nullable SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }

    public void queryData(String sql){
        SQLiteDatabase database = getWritableDatabase();
        database.execSQL(sql);
    }

    public Cursor getData(String sql){
        SQLiteDatabase database = getReadableDatabase();
        return database.rawQuery(sql, null);
    }

    public void insertData(String fullName, String className, String studentCode){
        SQLiteDatabase database = getWritableDatabase();
        String sql = "INSERT INTO Student VALUES(null, ?, ?, ?)";
        SQLiteStatement statement = database.compileStatement(sql);
        statement.clearBindings();
        statement.bindString(1, fullName);
        statement.bindString(2, className);
        statement.bindString(3, studentCode);

        statement.executeInsert();
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {

    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }
}
```

4. Main activity

```java
package com.phuocnhat.myapplication;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    Button btn1, btn2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        linkViews();
        addEvents();
    }

    private void addEvents() {
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, com.phuocnhat.myapplication.Question_One.class);
                startActivity(intent);
            }
        });

        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, com.phuocnhat.myapplication.Question_Two.class);
                startActivity(intent);
            }
        });
    }

    private void linkViews() {
        btn1 = findViewById(R.id.btnQuestionOne);
        btn2 = findViewById(R.id.btnQuestionTwo);
    }
}
```

4.1 XML Main Activity:

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:layout_margin="20dp"
        android:text="Thi hoc ki"
        android:textSize="25sp"
        android:textStyle="bold"
        tools:ignore="HardcodedText" />

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_gravity="center"
        android:orientation="horizontal">

        <Button
            android:id="@+id/btnQuestionOne"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="20dp"
            android:text="Câu 1"
            android:textStyle="bold"
            tools:ignore="ButtonStyle,HardcodedText" />

        <Button
            android:id="@+id/btnQuestionTwo"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="20dp"
            android:text="Câu 2"
            android:textStyle="bold"
            tools:ignore="ButtonStyle,HardcodedText" />
    </LinearLayout>

</LinearLayout>
```

5. Question 1

```java
package com.phuocnhat.myapplication;

import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.os.SystemClock;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.GridLayout;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

public class Question_One extends AppCompatActivity {
    GridLayout gridLayout;
    EditText editText;
    Button btnDraw;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_question_one);

        linkViews();
        addEvents();
    }

    private void addEvents() {
        btnDraw.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                runBackgroundThread();
            }
        });
    }

    private void linkViews() {
        gridLayout = findViewById(R.id.gridLayout);
        editText = findViewById(R.id.edt);
        btnDraw = findViewById(R.id.btnDraw);
    }

    Handler handler = new Handler(new Handler.Callback() {
        @Override
        public boolean handleMessage(@NonNull Message message) {
            int id = message.arg1;
            String value = message.obj.toString();
            Button btn = new Button(Question_One.this);
            btn.setId(id);
            btn.setText(value);
            btn.setWidth(350);
            btn.setHeight(250);
            btn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Button val = findViewById(view.getId());
                    String text = editText.getText().toString() + val.getText().toString();
                    editText.setText(text);
                }
            });
            gridLayout.addView(btn);
            return false;
        };
    });

    private void runBackgroundThread(){
        Thread backgroundThread = new Thread(new Runnable() {
            @Override
            public void run() {
                Message message;
                for(int i=1; i <= 12; i++)
                {
                    message = handler.obtainMessage();
                    message.obj = i;
                    switch (i){
                        case 10:
                            message.obj = "*";
                            break;
                        case 11:
                            message.obj = "0";
                            break;
                        case 12:
                            message.obj = "#";
                            break;
                    }
                    message.arg1 = i;
                    handler.sendMessage(message);
                    SystemClock.sleep(100);
                }
            }
        });
        backgroundThread.start();
    }
}
```

5.1 Question 1 XML

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".Question_One">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <Button
            android:id="@+id/btnDraw"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:text="DRAW VIEW"
            android:textStyle="bold"
            tools:ignore="HardcodedText" />

        <EditText
            android:id="@+id/edt"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:gravity="center"
            android:inputType="number"
            tools:ignore="Autofill,LabelFor,TextFields" />
    </LinearLayout>

    <GridLayout
        android:id="@+id/gridLayout"
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_gravity="center"
        android:layout_marginTop="50dp"
        android:columnCount="3"
        tools:ignore="UselessLeaf,UselessParent">

    </GridLayout>
</LinearLayout>
```

6. Question 2

```java
package com.phuocnhat.myapplication;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.bottomsheet.BottomSheetDialog;
import com.phuocnhat.myapplication.adapter.StudentAdapter;
import com.phuocnhat.myapplication.module.Student;

import java.util.ArrayList;

public class Question_Two extends AppCompatActivity {
    ListView lvStudent;
    ArrayList<Student> studentArrayList;
    StudentAdapter adapter;
    Button btnSave, btnBack;
    BottomSheetDialog bottomSheetDialog;
    EditText edtFullName, edtClassName, edtStudentCode;

    public static Database database;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_question_two);

        linkViews();
        addEvents();

        createDialog();
        createDB();

        getDataFromDB();
    }

    private void getDataFromDB() {
        Cursor cursor = database.getData("SELECT * FROM Student");

        while (cursor.moveToNext()){
            studentArrayList.add(new Student(cursor.getInt(0), cursor.getString(1), cursor.getString(2), cursor.getString(3)));
        }
        cursor.close();
    }

    private void createDB() {
        database = new Database(this, "student", null, 1);
        database.queryData("CREATE TABLE IF NOT EXISTS Student(Id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "FullName VARCHAR(150), ClassName VARCHAR(150), StudentCode VARCHAR(150))");
    }

    private void createDialog() {
        if(bottomSheetDialog == null){
            View view = LayoutInflater.from(this).inflate(R.layout.dialog_student, null);

            btnBack = view.findViewById(R.id.btnBack);
            btnSave =  view.findViewById(R.id.btnSave);
            edtFullName = view.findViewById(R.id.edtFullName);
            edtClassName = view.findViewById(R.id.edtClassName);
            edtStudentCode = view.findViewById(R.id.edtStudentCode);

            btnSave.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    String fullName, className, studentCode;
                    fullName = edtFullName.getText().toString();
                    className = edtClassName.getText().toString();
                    studentCode = edtStudentCode.getText().toString();

                    database.insertData(fullName, className, studentCode);
                    Toast.makeText(Question_Two.this, "Insert success", Toast.LENGTH_SHORT).show();

                    bottomSheetDialog.dismiss();
                    startActivity(new Intent(Question_Two.this, Question_Two.class));
                }
            });

            btnBack.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    bottomSheetDialog.dismiss();
                }
            });

            bottomSheetDialog  = new BottomSheetDialog(this);
            bottomSheetDialog.setContentView(view);
        }
    }

    private void addEvents() {
        lvStudent.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> adapterView, View view, int i, long l) {
                bottomSheetDialog.show();
                return false;
            }
        });
    }

    public void linkViews() {
        lvStudent = findViewById(R.id.lvStudent);

        int id = 1;
        String fullName = "Đoàn Phước Nhật";
        String className = "CNTT K60";
        String studentCode = "6051071083";

        Student std1 = new Student(id ,fullName, className, studentCode);

        studentArrayList = new ArrayList<>();

        studentArrayList.add(std1);

        adapter = new StudentAdapter(this, R.layout.student_item, studentArrayList);
        lvStudent.setAdapter(adapter);
    }
}
```

6.1 Question 2 XML

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".Question_Two">

    <ListView
        android:id="@+id/lvStudent"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        />


</LinearLayout>
```

Dialog_Student

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:hint="Nhập Thông Tin Sinh Viên"
        android:textStyle="bold"
        android:layout_margin="20dp"
        android:textSize="25sp"
        tools:ignore="HardcodedText" />

    <GridLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:columnCount="2"
        tools:ignore="UselessLeaf">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textSize="20sp"
            android:textStyle="bold"
            android:hint="Nhập tên sinh viên: "
            android:layout_margin="10dp"
            tools:ignore="HardcodedText" />

        <EditText
            android:id="@+id/edtFullName"
            android:layout_width="200dp"
            android:layout_margin="10dp"
            tools:ignore="Autofill,LabelFor,TextFields"
            android:layout_height="wrap_content"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textSize="20sp"
            android:textStyle="bold"
            android:hint="Nhập lớp: "
            android:layout_margin="10dp"
            tools:ignore="HardcodedText" />

        <EditText
            android:id="@+id/edtClassName"
            android:layout_width="200dp"
            android:layout_margin="10dp"
            tools:ignore="Autofill,LabelFor,TextFields"
            android:layout_height="wrap_content"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textSize="20sp"
            android:textStyle="bold"
            android:hint="Nhập mã sinh viên: "
            android:layout_margin="10dp"
            tools:ignore="HardcodedText" />

        <EditText
            android:id="@+id/edtStudentCode"
            android:layout_width="200dp"
            android:layout_margin="10dp"
            tools:ignore="Autofill,LabelFor,TextFields"
            android:layout_height="wrap_content"/>
    </GridLayout>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="end"
        >
        <Button
            android:id="@+id/btnSave"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:text="Lưu lại"
            tools:ignore="ButtonStyle,HardcodedText" />
        <Button
            android:id="@+id/btnBack"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:text="Trờ về"
            tools:ignore="ButtonStyle,HardcodedText" />
    </LinearLayout>

</LinearLayout>
```

student_item

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:hint="Nhập Thông Tin Sinh Viên"
        android:textStyle="bold"
        android:layout_margin="20dp"
        android:textSize="25sp"
        tools:ignore="HardcodedText" />

    <GridLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:columnCount="2"
        tools:ignore="UselessLeaf">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textSize="20sp"
            android:textStyle="bold"
            android:hint="Nhập tên sinh viên: "
            android:layout_margin="10dp"
            tools:ignore="HardcodedText" />

        <EditText
            android:id="@+id/edtFullName"
            android:layout_width="200dp"
            android:layout_margin="10dp"
            tools:ignore="Autofill,LabelFor,TextFields"
            android:layout_height="wrap_content"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textSize="20sp"
            android:textStyle="bold"
            android:hint="Nhập lớp: "
            android:layout_margin="10dp"
            tools:ignore="HardcodedText" />

        <EditText
            android:id="@+id/edtClassName"
            android:layout_width="200dp"
            android:layout_margin="10dp"
            tools:ignore="Autofill,LabelFor,TextFields"
            android:layout_height="wrap_content"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textSize="20sp"
            android:textStyle="bold"
            android:hint="Nhập mã sinh viên: "
            android:layout_margin="10dp"
            tools:ignore="HardcodedText" />

        <EditText
            android:id="@+id/edtStudentCode"
            android:layout_width="200dp"
            android:layout_margin="10dp"
            tools:ignore="Autofill,LabelFor,TextFields"
            android:layout_height="wrap_content"/>
    </GridLayout>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="end"
        >
        <Button
            android:id="@+id/btnSave"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:text="Lưu lại"
            tools:ignore="ButtonStyle,HardcodedText" />
        <Button
            android:id="@+id/btnBack"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:text="Trờ về"
            tools:ignore="ButtonStyle,HardcodedText" />
    </LinearLayout>

</LinearLayout>

```

MainiFest

```java
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.vodoanhoanglong.final_exam">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Final_Exam">
        <activity
            android:name=".MainActivity"
            android:exported="false" />
        <activity
            android:name=".Question_One"
            android:exported="false"
            android:label="@string/title_activity_main"
            android:theme="@style/Theme.Final_Exam.NoActionBar" />
        <activity
            android:name=".Question_Two"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
```
