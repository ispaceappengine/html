<head>
<script type="text/javascript">

   function changeFunc($i) {
    alert($i);
   }

  </script>
<title>Using GET Method to Read Form Data</title>
</head> 
 
 <c:forEach items="${list_names}" var="startTime" varStatus="status">
  <option value="${status.index}">${startTime}</option>
</c:forEach>

<form action="index.jsp">
  <p>
    <select name="top5" size="1" onchange="changeFunc(value)">
    
    <c:forEach items="${list_names}" var="name" varStatus="status">
      <option value="${name}">${name}</option>
    </c:forEach>
    
      <option>Heino</option>
      <option>Heino2</option>
    </select>
  </p>
  <td > <input formaction="http://localhost/soscon/index.jsp"  formmethod="post" type="submit" value="Display InsertSensor.xml"/></td>
</form>
