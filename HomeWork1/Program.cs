//Пузырёк
List<int> list = new List<int>() { 30, 50, 15, 100, 200, 50, 1123 };
int lastNum = 0;

Console.WriteLine("----------START----------");
foreach (int i in list)
{
    Console.Write(i + " ");
}
Console.WriteLine();
for (int i = 0;i < list.Count - 1; i++)
{
    for (int k = 0; k < list.Count - i - 1; k++)
    {
        if (list[k] < list[k + 1])
        {
            lastNum = list[k];
            list[k] = list[k + 1];
            list[k + 1] = lastNum;
        }
    }
}
Console.WriteLine("---------SORTED----------");
foreach (int i in list)
{
    Console.Write(i + " ");
}
